import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { darkTheme } from '../../../assets/ts/globals'
import { ITimeSpan } from 'src/app/interfaces/ITimeSpan';
import { IWorkDays } from 'src/app/interfaces/IWorkDays';
import { IWorkDay } from 'src/app/interfaces/IWorkDay';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css'],
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
export class ShiftsComponent implements OnInit {

  @Input() selectedWorkday: IWorkDay;

  _selectedWorday: any;
  constructor() { }

  public darkTheme = darkTheme;

  ngOnInit(): void {
  }

  public addShift() {
    this.selectedWorkday.shiftBreaks.push("");
  }

  public removeShift(i) {
    this.selectedWorkday.shiftBreaks.splice(i, 1);
  }

  public trackItem(index: number, value: string) {
    return index;
  }
}
