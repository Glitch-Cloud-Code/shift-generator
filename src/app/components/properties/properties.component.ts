import { Component, OnInit, ViewChild } from "@angular/core";
import { darkTheme } from "../../../assets/ts/globals";
import { trigger, transition, style, animate } from "@angular/animations";
import { IWorkDays } from "src/app/interfaces/IWorkDays";
import { IWorkDay } from "src/app/interfaces/IWorkDay";
import { isNullOrUndefined } from "util";
import { IWorker } from "src/app/interfaces/IWorker";
import { CalculationService } from "src/app/services/calculationService";
import { ITimeSpan } from 'src/app/interfaces/ITimeSpan';
import { WorkersMenuComponent } from '../workers-menu/workers-menu.component';
import { WorkPeriodComponent } from '../work-period/work-period.component';

@Component({
  selector: "app-properties",
  templateUrl: "./properties.component.html",
  styleUrls: ["./properties.component.css"],
  providers: [CalculationService],
  animations: [
    trigger("inOutAnimation", [
      transition(":enter", [
        style({ height: 0, width: 0, opacity: 0 }),
        animate(
          "0.25s ease-out",
          style({ height: "*", width: "*", opacity: 0 })
        ),
        animate("0.1s ease-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ height: "*", width: "*", opacity: 1 }),
        animate("0.1s ease-in", style({ opacity: 0 })),
        animate("0.25s ease-out", style({ height: 0, width: 0 }))
      ])
    ])
  ]
})
export class PropertiesComponent implements OnInit {
  constructor(private calculationService: CalculationService) {}
  ngOnInit(): void {}

  public darkTheme = darkTheme;
  public workDays: IWorkDays = new IWorkDays();
  public selectedWorday: IWorkDay;
  public selectedWorker: IWorker;
  public bSameShifts = false;
  public sameShiftsWorkday: IWorkDay = new IWorkDay();
  public lastSelectedWorkday: IWorkDay;
  public workPeriod: ITimeSpan;

  @ViewChild(WorkersMenuComponent) workersMenuComponent;
  @ViewChild(WorkPeriodComponent) workPeriodComponent;


  public workDaySelected(workDayName) {
    if (this.bSameShifts) return;
    if (this.selectedWorday === this.workDays[workDayName])
      this.selectedWorday = null;
    else this.selectedWorday = this.workDays[workDayName];
  }

  public isWorkDaySelected(name) {
    if (isNullOrUndefined(this.selectedWorday)) return false;
    return name === this.selectedWorday.name;
  }

  public onSameShiftsChanged(b: boolean) {
    this.bSameShifts = b;
    if (b) {
      this.lastSelectedWorkday = this.selectedWorday;
      this.selectedWorday = this.sameShiftsWorkday;
    } else {
      this.selectedWorday = this.lastSelectedWorkday;
    }
  }

  public calculate() {
    this.calculationService.calculate(
      {
        workPeriod: {from:  this.workPeriodComponent.from, to: this.workPeriodComponent.to},
        workers: this.workersMenuComponent.workers,
        companyWorkingHours: this.workDays,
        sameShiftsWorkday: this.sameShiftsWorkday,
        bSameShifts: this.bSameShifts
      }
    );
  }
}
