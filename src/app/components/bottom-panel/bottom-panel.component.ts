import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.css']
})
export class BottomPanelComponent implements OnInit {

  @Output() calculate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public _calculate() {
    this.calculate.emit();
  }

}
