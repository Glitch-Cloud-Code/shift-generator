import { Component, OnInit, Input } from '@angular/core';
import { IWorker } from 'src/app/interfaces/IWorker';

@Component({
  selector: 'app-worker-properties',
  templateUrl: './worker-properties.component.html',
  styleUrls: ['./worker-properties.component.css']
})
export class WorkerPropertiesComponent implements OnInit {

  @Input() selectedWorker: IWorker;

  constructor() { }

  ngOnInit(): void {
  }

}
