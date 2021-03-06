import { Injectable } from "@angular/core";
import { ICalculationData } from "../interfaces/ICalculationData";
import { ITimeSpan } from "../interfaces/ITimeSpan";
import { IWorker } from "../interfaces/IWorker";
import { isNullOrUndefined } from "util";

export enum eDays {
  "monday" = 1,
  "tuesday" = 2,
  "wednesday" = 3,
  "thursday" = 4,
  "friday" = 5,
  "saturday" = 6,
  "sunday" = 0,
}

@Injectable()
export class CalculationService {
  constructor() {}

  public calculate(data: ICalculationData) {
    let result = this.generateTimeSpanObject(data);
    //Reset noWorkScores
    for (let worker of data.workers) {
      worker.workHours = 0;
    }
    this.generateSchedule(data, result);
    console.log(result);
  }

  //Main logic for generating work schedule
  private generateSchedule(data: ICalculationData, timeSpanObject: any) {
    //Iterate over each year/month/day for the given timespan
    for (const year in timeSpanObject) {
      for (const month in timeSpanObject[year]) {
        for (let day in timeSpanObject[year][month]) {
          let currentDate = new Date(
            parseInt(year),
            parseInt(month) - 1,
            parseInt(day)
          );
          let shifts;
          //Get shifts for current day
          if (data.bSameShifts) {
            shifts = data.companyWorkingHours.all.shiftBreaks;
          } else {
            shifts =
              data.companyWorkingHours[eDays[currentDate.getDay()]].shiftBreaks;
          }
          //Generate array of timespans representing shifts that we need to fill up with workers
          let shiftHours = [];
          if (shifts.length == 0) {
            shiftHours = [
              data.companyWorkingHours[eDays[currentDate.getDay()]].workTime,
            ];
          } else {
            shiftHours[0] = {
              from:
                data.companyWorkingHours[eDays[currentDate.getDay()]].workTime
                  .from,
              to: shifts[0],
            };
            for (let i = 0; i < shifts.length - 1; i++) {
              shiftHours[i + 1] = { from: shifts[i], to: shifts[i + 1] };
            }
            shiftHours.push({
              from: shifts[shifts.length - 1],
              to:
                data.companyWorkingHours[eDays[currentDate.getDay()]].workTime
                  .to,
            });
          }
          if (shiftHours[0].from == "" || shiftHours[0].to == "") {
            //Company is not working today
            continue;
          } else {
            //Fill up shifts with workers
            for (let i = 0; i < shiftHours.length; i++) {
              let availableWorkers = this.getWorkersForCurrentTimeSpan(
                data,
                currentDate,
                shiftHours[i]
              );
              timeSpanObject[year][month][day].push({
                worker: this.selectWorker(
                  this.calculateWorkHoursAmount(shiftHours[i]),
                  availableWorkers
                ),
                time: shiftHours[i],
              });
            }
          }
        }
      }
    }
  }

  private calculateWorkHoursAmount(timeSpan: ITimeSpan) {
    //Extract numeric data from strings
    let fromHours = Number.parseInt(timeSpan.from.substring(0, 2));
    let fromMins = Number.parseInt(timeSpan.from.substring(3, 5));

    let toHours = Number.parseInt(timeSpan.to.substring(0, 2));
    let toMins = Number.parseInt(timeSpan.to.substring(3, 5));
    //If we can't substract minutes without going negative - remove one hour and add 60 minutes
    if (fromMins > toMins) {
      toHours--;
      toMins += 60;
    }
    return toHours - fromHours + (toMins - fromMins) / 60;
  }

  // Selects worker from the list of available workers and updates their no work scores
  private selectWorker(hours: number, workers: IWorker[]) {
    if (workers.length === 0) {
      return "No worker available!";
    }
    //Get value minimum work hours
    let minWorkHours = workers.reduce((res, worker) => {
      return res.workHours < worker.workHours ? res : worker;
    }).workHours;
    //Get list of workers with maximum no work score
    let workersWithMinWorkHours = workers
      .map((worker) => {
        if (worker.workHours === minWorkHours) return worker;
      })
      .filter((item) => {
        return !isNullOrUndefined(item);
      });
    //Select worker randomly
    let selectedWorker =
      workersWithMinWorkHours[
        Math.floor(Math.random() * workersWithMinWorkHours.length)
      ];

    //Increase worker hours
    selectedWorker.workHours += hours;

    //Return selected worker
    return selectedWorker;
  }

  //Returns a list of workers that will be available for the given timespan
  private getWorkersForCurrentTimeSpan(
    data: ICalculationData,
    date: Date,
    workTime: ITimeSpan
  ) {
    let result = [];
    for (const worker of data.workers) {
      let workerAvailability;
      //Get vorker availability for current day
      if (worker.bAvailableAtTheSameTimeEveryday) {
        workerAvailability = worker.available.all;
      } else {
        workerAvailability = worker.available[eDays[date.getDay()]];
      }
      //Check if he is is available in the given time period
      if (this.timeSpanInsdeTimespan(workTime, workerAvailability.workTime)) {
        result.push(worker);
      }
    }
    return result;
  }

  //Checks if two timespans intersect
  private timeSpansIntersect(a: ITimeSpan, b: ITimeSpan): boolean {
    if (
      isNullOrUndefined(a) ||
      isNullOrUndefined(b) ||
      a.from === "" ||
      a.to === "" ||
      b.from === "" ||
      b.to === ""
    ) {
      return false;
    }
    return (
      (a.from > b.from && a.from < b.to) || (b.from > a.from && b.from < a.to)
    );
  }

  //Checks if first timespan is inside second timespan
  private timeSpanInsdeTimespan(a: ITimeSpan, b: ITimeSpan): boolean {
    if (
      isNullOrUndefined(a) ||
      isNullOrUndefined(b) ||
      a.from === "" ||
      a.to === "" ||
      b.from === "" ||
      b.to === ""
    ) {
      return false;
    }
    return a.from >= b.from && a.to <= b.to;
  }

  //Generates an object for the given timespan that will store data about workshifts.
  private generateTimeSpanObject(data: ICalculationData) {
    let result = [];

    let startYear = data.workPeriod.from.getFullYear();
    let endYear = data.workPeriod.to.getFullYear();

    //Fill up result object with all the years in the given time span
    for (let i = startYear; i <= endYear; i++) {
      let months = [];
      for (
        let j = i == startYear ? data.workPeriod.from.getMonth() : 0;
        j <= (i == endYear ? data.workPeriod.to.getMonth() : 11);
        j++
      ) {
        months[j + 1 + ""] = this.getDaysInMonth(
          j,
          i,
          i === startYear && j === data.workPeriod.from.getMonth()
            ? data.workPeriod.from.getDate()
            : 1,
          i === endYear && j === data.workPeriod.to.getMonth()
            ? data.workPeriod.to.getDate()
            : 31
        );
      }
      result[i + ""] = months;
    }
    return result;
  }

  //Returns array consisting of index and empty array, where index is a date of a month
  // and empty array will be used to store data about generated work schedule for given day.
  private getDaysInMonth(month, year, startDay, endDay) {
    var date = new Date(year, month, startDay);
    var days = [];
    while (date.getMonth() === month && date.getDate() <= endDay) {
      days[date.getDate().toString()] = [];
      date.setDate(date.getDate() + 1);
    }
    return days;
  }
}
