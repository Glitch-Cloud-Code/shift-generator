import { Component, OnInit, Input } from "@angular/core";
import { IWorker } from "src/app/interfaces/IWorker";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-worker-properties",
  templateUrl: "./worker-properties.component.html",
  styleUrls: ["./worker-properties.component.css"],
  animations: [
    trigger("inOutAnimation", [
      transition(":enter", [
        style({ height: 0, width: 0, opacity: 0 }),
        animate("0.25s ease-out", style({ height: "*" })),
        animate("0.25s ease-out", style({ width: "*" })),
        animate("0.1s ease-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ height: "*", width: "*", opacity: 1 }),
        animate("0.1s ease-in", style({ opacity: 0 })),
        animate("0.25s ease-out", style({ height: 0 })),
        animate("0.25s ease-out", style({ width: 0 }))
      ])
    ])
  ]
})
export class WorkerPropertiesComponent implements OnInit {
  @Input() selectedWorker: IWorker;

  constructor() {}

  ngOnInit(): void {}
}
