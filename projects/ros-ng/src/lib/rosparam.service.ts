import { Injectable } from '@angular/core';
import { RosconnectService } from './rosconnect.service';
import { Subject, Observable } from 'rxjs';


declare const ROSLIB: any;

@Injectable()
export class RosParamService {

  constructor(
    private pepper: RosconnectService,
    private logService: LogService
  ) {

  }

  getRosParam(paramName: string): Observable<any> {
    const param = new ROSLIB.Param({ros : this.pepper.ros,name : paramName});
    paramSub = new Subject<any>();
    param.get(
      value => paramSub.next(value)
    );
    return paramSub.asObservable().pipe(
      tap(message => this.logService.setLogParam(paramName, message)));
  }

  setRosParam(paramName: string): Observable<any> {
    const param = new ROSLIB.Param({ros : this.pepper.ros,name : paramName});
    paramSub = new Subject<any>();
    param.set(
      value => paramSub.next(value)
    );
    return paramSub.asObservable().pipe(
      tap(message => this.logService.setLogParam(paramName, message)));
  }


}
