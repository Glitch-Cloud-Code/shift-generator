import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITimeSpan } from 'src/app/interfaces/ITimeSpan';

@Component({
  selector: 'app-work-period',
  templateUrl: './work-period.component.html',
  styleUrls: ['./work-period.component.css']
})
export class WorkPeriodComponent implements OnInit {

  @Output() workPeriod: EventEmitter<ITimeSpan> = new EventEmitter();

  public from: Date;
  public to: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
