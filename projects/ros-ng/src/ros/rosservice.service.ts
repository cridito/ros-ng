import { Injectable } from '@angular/core';
import { RosconnectService } from './rosconnect.service';
import { BehaviorSubject } from 'rxjs';
import { LogService } from './log.service';


declare const ROSLIB: any;

@Injectable({
  providedIn: 'root'
})
export class RosServiceService {

  serviceSubject: BehaviorSubject<any>;

  constructor(
    private pepper: RosconnectService,
    private logService: LogService
  ) {
    this.serviceSubject = new BehaviorSubject<any>(0);
  }


  private getService(serviceName: string, serviceType: string, requestObject: any = ""): any{
    const service = new ROSLIB.Service({ros : this.pepper.ros,name : serviceName,serviceType : serviceType});
    const request = new ROSLIB.ServiceRequest(requestObject);
    return {service: service, request: request}
  }


  callService(serviceName: string, serviceType: string, requestObject: any = null): BehaviorSubject<any>{
    const service = new ROSLIB.Service({ros : this.pepper.ros,name : serviceName,serviceType : serviceType});
    let request: any;
    requestObject ? request = new ROSLIB.ServiceRequest(requestObject) : request = new ROSLIB.ServiceRequest();
    console.log(requestObject);
    service.callService(
       request,
       result => {
         this.serviceSubject.next(result);
         console.log(result);
         this.logService.setLogService(serviceName, requestObject, result);
       },
       error => {
         console.log(error);
         this.serviceSubject.error(error);
         this.logService.setLogService(serviceName, requestObject, error);
       });

    return this.serviceSubject;
  }
}
