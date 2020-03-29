import { IWorkDays } from './IWorkDays';

export class IWorker {
  name: string;
  available: IWorkDays;
  bAvailableAtTheSameTimeEveryday: boolean;
  noWorkScore: number; //This number is used to calculate how many days worker didn't work and when we need to add him to the whor schedule

  constructor(name: string) {
    return {
      name: name,
      available : new IWorkDays(),
      bAvailableAtTheSameTimeEveryday: false,
      noWorkScore : 0
    }
  }
}
