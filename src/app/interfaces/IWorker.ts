import { IWorkDays } from './IWorkDays';

export class IWorker {
  name: string;
  available: IWorkDays;

  constructor(name: string) {
    return {
      name: name,
      available : new IWorkDays()
    }
  }
}
