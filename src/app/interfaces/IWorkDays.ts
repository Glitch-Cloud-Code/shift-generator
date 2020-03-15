import { IWorkDay } from './IWorkDay';

export class IWorkDays {
  monday: IWorkDay;
  tuesday: IWorkDay;
  wednesday: IWorkDay;
  thursday:IWorkDay;
  friday:IWorkDay;
  saturday:IWorkDay;
  sunday:IWorkDay;
  all: IWorkDay;

  constructor () {
    return {
      monday: {name: "Monday", workTime: {from: "", to: ""}, shiftBreaks: []},
      tuesday: {name: "Tuesday", workTime: {from: "", to: ""}, shiftBreaks: []},
      wednesday: {name: "Wednesday", workTime: {from: "", to: ""}, shiftBreaks: []},
      thursday: {name: "Thursday", workTime: {from: "", to: ""}, shiftBreaks: []},
      friday: {name: "Friday", workTime: {from: "", to: ""}, shiftBreaks: []},
      saturday: {name: "Saturday", workTime: {from: "", to: ""}, shiftBreaks: []},
      sunday: {name: "Sunday", workTime: {from: "", to: ""}, shiftBreaks: []},
      all: {name: "All", workTime: {from: "", to: ""}, shiftBreaks: []}
    }
  }
}

