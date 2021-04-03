import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

declare const ROSLIB: any;
@Injectable({
  providedIn: 'root'
})
export class RestService {

  restSubject: Subject<string>;

  constructor(
    private rosService: RosServiceService
  ) {
    this.restSubject = new Subject<string>();
  }

  rest(): any {
    const serviceName = '/pepper_robot/pose/rest';
    const serviceType = 'std_srvs/Empty';
    this.rosService.callService(serviceName, serviceType).subscribe(
        { next: result => {
              this.restSubject.next(result);
              console.log("Service: " + serviceName + " Value: Rest Status: " + result["success"]);
          },
          error: error => {
            this.restSubject.error(error);
            console.log("Service: " + serviceName + "Error: " +  error);
          }
        }
    );
  }

  getRestSub(): Subject<any> {
    return this.restSubject;
  }

}
