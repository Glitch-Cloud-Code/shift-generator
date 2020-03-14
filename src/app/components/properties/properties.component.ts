import { Component, OnInit } from "@angular/core";
import { darkTheme } from "../../../assets/ts/globals";
import { trigger, transition, style, animate } from "@angular/animations";
import { ITimeSpan } from "src/app/interfaces/ITimeSpan";
import { IWorkDays } from "src/app/interfaces/IWorkDays";
import { IWorkDay } from 'src/app/interfaces/IWorkDay';
import { isNullOrUndefined } from 'util';
import { IWorker } from 'src/app/interfaces/IWorker';

@Component({
  selector: "app-properties",
  templateUrl: "./properties.component.html",
  styleUrls: ["./properties.component.css"],
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
  constructor() {}
  ngOnInit(): void {}

  public darkTheme = darkTheme;
  public workDays: IWorkDays = new IWorkDays();
  public selectedWorday: IWorkDay;
  public selectedWorker: IWorker;

  public workDaySelected(workDayName) {
    if (this.selectedWorday === this.workDays[workDayName])
      this.selectedWorday = null;
    else
      this.selectedWorday = this.workDays[workDayName];
  }

  public isWorkDaySelected(name) {
    if (isNullOrUndefined(this.selectedWorday))
      return false;
    return name === this.selectedWorday.name;
  }
}
