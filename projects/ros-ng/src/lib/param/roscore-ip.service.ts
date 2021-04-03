import { Injectable } from '@angular/core';
import { RosParamService } from '../../services/rosparam.service';
import { Observable, BehaviorSubject, Subject  } from 'rxjs';
import { LogService } from '../../services/log.service';


@Injectable({
  providedIn: 'root'
})
export class RoscoreIpService {

  roscoreParam: any;
  roscoreSubject: BehaviorSubject<string>;

  constructor(
    private rosParam: RosParamService,
    private logService: LogService
  ) {

  }

  paramName: string = 'roscore_ip';

  init(): void{
    this.roscoreParam = this.rosParam.getRosParam(this.paramName);
    this.roscoreSubject = new BehaviorSubject<string>("init");
    this.roscoreParam.get(
          value => {
            this.roscoreSubject.next(value);
            this.logService.setLogParam(this.paramName, value);
          }
        );
  }

  setRoscoreIp(value: string): void{
    if(!this.roscoreParam){
      this.init();
    }
    this.roscoreParam.set(
      value,
      result => {
      console.log(result);
      this.logService.setLogParam(this.paramName, value, result);}
    );
  }

  getRoscoreObservable(): Observable<any>{
    if(!this.roscoreParam){
      this.init();
    }
      return this.roscoreSubject.asObservable();
  }
}
