import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { animation, trigger, transition, style, animate } from '@angular/animations';

export const darkTheme: NgxMaterialTimepickerTheme = {
  container: {
    bodyBackgroundColor: "#424242",
    buttonColor: "#fff"
  },
  dial: {
    dialBackgroundColor: "#555"
  },
  clockFace: {
    clockFaceBackgroundColor: "#555",
    clockHandColor: "#9fbd90",
    clockFaceTimeInactiveColor: "#fff"
  }
};

export const inputAnimations = animation ([
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
