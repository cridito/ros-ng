import { Injectable } from '@angular/core';
import { RosconnectService } from './rosconnect.service';
import { Subject } from 'rxjs';
import { LogService } from './log.service';
import * as ROSLIB from 'roslib';

@Injectable()
export class RosServiceService {

  constructor(private pepper: RosconnectService, private logService: LogService
  ) {}

  callService(serviceName: string, serviceType: string, requestObject: Object = null): Subject<Object>{
    let request;
    const service = new ROSLIB.Service({ros : this.pepper.ros,name : serviceName,serviceType : serviceType});
    requestObject ? request = new ROSLIB.ServiceRequest(requestObject) : request = new ROSLIB.ServiceRequest();
    const serviceSubject = new Subject< Object >();
    service.callService(
       request,
       result => {
         serviceSubject.next(result);
         this.logService.setLogService(serviceName, requestObject, result);
       },
       error => {
         serviceSubject.error(error);
         this.logService.setLogService(serviceName, requestObject, error);
       });

    return serviceSubject;
  }
}
