import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { IWorker } from "src/app/interfaces/IWorker";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-workers-menu",
  templateUrl: "./workers-menu.component.html",
  styleUrls: ["./workers-menu.component.css"],
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
export class WorkersMenuComponent implements OnInit {
  @Output() selectedWorker: EventEmitter<IWorker> = new EventEmitter();

  public workers: IWorker[] = [];
  private workerCounter: number = 1;
  public _selectedWorker: IWorker;

  constructor() {}

  ngOnInit(): void {}

  public addWorker() {
    this.workers.push(new IWorker("Worker" + this.workerCounter++));
  }

  public removeWorker(index, $event) {
    $event.stopPropagation();
    if (this.isWorkerSelected(this.workers[index]))
      this.selectWorker(null);

    this.workers.splice(index, 1);
  }

  public selectWorker(worker) {
    if (worker === this._selectedWorker) this._selectedWorker = null;
    else this._selectedWorker = worker;

    this.selectedWorker.emit(this._selectedWorker);
  }

  public isWorkerSelected(worker: IWorker) {
    return this._selectedWorker === worker;
  }
}
