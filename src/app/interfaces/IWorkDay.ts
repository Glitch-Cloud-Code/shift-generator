import { ITimeSpan } from './ITimeSpan';

export class IWorkDay {
  name: string;
  workTime: ITimeSpan;
  //We can't store values directly in the array of strings because
  // then we can't iterate over that list with ngFor and use values as model
  // because angular will fire :enter and :leave animations on each vale change
  // stackblitz: https://stackblitz.com/edit/angular-material-baseline2-7pmidv
  // Edit: Solved by using trackBy on ngFor.
  // stackoverflow: https://stackoverflow.com/questions/60672162/how-to-avoid-enter-leave-animations-on-value-change-when-using-ngfor/60673050#60673050
  shiftBreaks: string[];
}
