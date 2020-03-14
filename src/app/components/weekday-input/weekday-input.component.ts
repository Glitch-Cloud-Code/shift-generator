import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { darkTheme} from '../../../assets/ts/globals'
import { IWorkDay } from 'src/app/interfaces/IWorkDay';

@Component({
  selector: "app-weekday-input",
  templateUrl: "./weekday-input.component.html",
  styleUrls: ["./weekday-input.component.css"],
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
export class WeekdayInputComponent implements OnInit {

  public passedValidation = false;
  public showIncorrectTimeMessage = false;
  public darkTheme = darkTheme;

  @Input() set workday(value: IWorkDay) {
    this._workday = value;
    this._values = this._workday.workTime;
  }
  @Input() selected: boolean;
  @Input() disableButton: boolean = false;
  @Output() select = new EventEmitter();

  public _values = { from: "", to: "" };
  public _workday: IWorkDay;

  constructor() {}

  ngOnInit(): void {}

  public click() {
    this.select.emit(this._workday.name.toLowerCase());
  }

  public timeSet() {
    setTimeout(() => {
      if (this.checkInputTime())  {
        this._workday.workTime = this._values;
      }
    });
  }

  public checkInputTime(): boolean {
    if (!this._values) return false;
    if (!this._values.from || !this._values.to) return false;
    if (this._values.from < this._values.to) {
      return true;
    } else {
      this.showIncorrectTimeMessage = true;
      return false;
    }
  }
}
