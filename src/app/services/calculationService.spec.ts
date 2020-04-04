import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationService } from './calculationService';
import { ICalculationData } from '../interfaces/ICalculationData';

describe('Calculation service', () => {
  let service: CalculationService;
  beforeEach(() => { service = new CalculationService(); });

  it('should calculate', () => {
    let data: ICalculationData = {
      "workPeriod": {
        "from": new Date("2020-02-29T22:00:00.000Z"),
        "to": new Date("2020-04-29T21:00:00.000Z")
      },
      "workers": [
        {
          "name": "Anna",
          "available": {
            "monday": {
              "name": "Monday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "tuesday": {
              "name": "Tuesday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "wednesday": {
              "name": "Wednesday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "thursday": {
              "name": "Thursday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "friday": {
              "name": "Friday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "saturday": {
              "name": "Saturday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "sunday": {
              "name": "Sunday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "all": {
              "name": "All",
              "workTime": {
                "from": "00:00",
                "to": "23:59"
              },
              "shiftBreaks": []
            }
          },
          "bAvailableAtTheSameTimeEveryday": true,
          "workHours": 0
        },
        {
          "name": "Derek",
          "available": {
            "monday": {
              "name": "Monday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "tuesday": {
              "name": "Tuesday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "wednesday": {
              "name": "Wednesday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "thursday": {
              "name": "Thursday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "friday": {
              "name": "Friday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "saturday": {
              "name": "Saturday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "sunday": {
              "name": "Sunday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "all": {
              "name": "All",
              "workTime": {
                "from": "12:00",
                "to": "20:00"
              },
              "shiftBreaks": []
            }
          },
          "bAvailableAtTheSameTimeEveryday": true,
          "workHours": 0
        },
        {
          "name": "Mike",
          "available": {
            "monday": {
              "name": "Monday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "tuesday": {
              "name": "Tuesday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "wednesday": {
              "name": "Wednesday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "thursday": {
              "name": "Thursday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "friday": {
              "name": "Friday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "saturday": {
              "name": "Saturday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "sunday": {
              "name": "Sunday",
              "workTime": {
                "from": "",
                "to": ""
              },
              "shiftBreaks": []
            },
            "all": {
              "name": "All",
              "workTime": {
                "from": "08:00",
                "to": "15:00"
              },
              "shiftBreaks": []
            }
          },
          "bAvailableAtTheSameTimeEveryday": true,
          "workHours": 0
        }
      ],
      "companyWorkingHours": {
        "monday": {
          "name": "Monday",
          "workTime": {
            "from": "08:00",
            "to": "20:15"
          },
          "shiftBreaks": [
            "14:00"
          ]
        },
        "tuesday": {
          "name": "Tuesday",
          "workTime": {
            "from": "08:00",
            "to": "20:15"
          },
          "shiftBreaks": [
            "14:00"
          ]
        },
        "wednesday": {
          "name": "Wednesday",
          "workTime": {
            "from": "10:15",
            "to": "20:00"
          },
          "shiftBreaks": [
            "15:00"
          ]
        },
        "thursday": {
          "name": "Thursday",
          "workTime": {
            "from": "08:00",
            "to": "20:00"
          },
          "shiftBreaks": [
            "14:00"
          ]
        },
        "friday": {
          "name": "Friday",
          "workTime": {
            "from": "08:00",
            "to": "23:00"
          },
          "shiftBreaks": [
            "12:00",
            "18:00"
          ]
        },
        "saturday": {
          "name": "Saturday",
          "workTime": {
            "from": "10:00",
            "to": "23:00"
          },
          "shiftBreaks": [
            "15:00",
            "19:00"
          ]
        },
        "sunday": {
          "name": "Sunday",
          "workTime": {
            "from": "",
            "to": ""
          },
          "shiftBreaks": []
        },
        "all": {
          "name": "All",
          "workTime": {
            "from": "",
            "to": ""
          },
          "shiftBreaks": []
        }
      },
      "sameShiftsWorkday": {
        "name": "",
        "workTime": {
          "from": "",
          "to": ""
        },
        "shiftBreaks": []
      },
      "bSameShifts": false
    }
    console.log(service.calculate(data));
  })
});
