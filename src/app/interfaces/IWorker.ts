import { IWorkDays } from './IWorkDays';

export class IWorker {
  name: string;
  available: IWorkDays;
  bAvailableAtTheSameTimeEveryday: boolean;

  constructor(name: string) {
    return {
      name: name,
      available : new IWorkDays(),
      bAvailableAtTheSameTimeEveryday: false,
    }
  }
}
