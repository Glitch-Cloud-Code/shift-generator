import { IWorker } from './IWorker';
import { ITimeSpan } from './ITimeSpan';
import { IWorkDays } from './IWorkDays';
import { IWorkDay } from './IWorkDay';

export class ICalculationData {
  workers: IWorker[];
  workPeriod: {from: Date, to: Date};
  companyWorkingHours: IWorkDays;
  sameShiftsWorkday: IWorkDay;
  bSameShifts: boolean;
}
