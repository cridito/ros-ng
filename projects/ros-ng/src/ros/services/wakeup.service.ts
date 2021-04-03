import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

@Injectable({
  providedIn: 'root'
})
export class WakeupService {

  wakeUpSubject: Subject<string>;

  constructor(
    private rosService: RosServiceService
  ) {
    this.wakeUpSubject = new Subject<string>();
  }

    wakeUp(): any {
      const serviceName = '/pepper_robot/pose/wakeup';
      const serviceType = 'std_srvs/Empty';
      this.rosService.callService(serviceName, serviceType).subscribe(
          { next: result => {
                this.wakeUpSubject.next(result);
                console.log("Service: " + serviceName + " Value: WakeUp Status: " + result["success"]);
            },
            error: error => {
              this.wakeUpSubject.error(error);
              console.log("Service: " + serviceName + "Error: " +  error);
            }
          }
      );
    }

    getWakeUpSub(): Subject<any> {
      return this.wakeUpSubject;
    }
}
