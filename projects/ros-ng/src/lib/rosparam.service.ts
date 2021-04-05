import { Injectable } from '@angular/core';
import { RosconnectService } from './rosconnect.service';
import { Subject, Observable } from 'rxjs';
import { LogService } from './log.service';
import { catchError, map, tap } from 'rxjs/operators';
import * as ROSLIB from 'roslib';

@Injectable()
export class RosParamService {

  constructor(
    private pepper: RosconnectService,
    private logService: LogService
  ) {

  }

  getRosParam(paramName: string): Observable<any> {
    const param = new ROSLIB.Param({ros : this.pepper.ros,name : paramName});
    const paramSub = new Subject<any>();
    param.get(
      value => paramSub.next(value)
    );
    return paramSub.asObservable().pipe(
      tap(message => this.logService.setLogParam(paramName, message)));
  }

  setRosParam(paramName: string, value: any): Observable<any> {
    const param = new ROSLIB.Param({ros : this.pepper.ros,name : paramName});
    const paramSub = new Subject<any>();
    param.set
      value,
      result => paramSub.next(result)
    );
    return paramSub.asObservable().pipe(
      tap(message => this.logService.setLogParam(paramName, message)));
  }


}
