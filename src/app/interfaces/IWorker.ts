import { IWorkDays } from './IWorkDays';

export class IWorker {
  name: string;
  available: IWorkDays;
  bAvailableAtTheSameTimeEveryday: boolean;
  workHours: number;

  constructor(name: string) {
    return {
      name: name,
      available : new IWorkDays(),
      bAvailableAtTheSameTimeEveryday: false,
      workHours : 0
    }
  }
}
