import { Injectable } from '@angular/core';
import { RosParamService } from '../../services/rosparam.service';
import { Observable, BehaviorSubject, Subject  } from 'rxjs';
import { LogService } from '../../services/log.service';


@Injectable({
  providedIn: 'root'
})
export class WebserverIpService {

  webServerParam: any;
  webServerSubject: BehaviorSubject<string>;

  constructor(
    private rosParam: RosParamService,
    private logService: LogService
  ) {

  }

  paramName: string = 'webserver_ip';
  init(): void{
    this.webServerParam = this.rosParam.getRosParam(this.paramName);
    this.webServerSubject = new BehaviorSubject<string>("init");
    this.webServerParam.get(
          value => {
            this.webServerSubject.next(value);
            this.logService.setLogParam(this.paramName, value);
          }
        );
  }

  setWebserverIp(value: string): void{
    if(!this.webServerParam){
      this.init();
    }
    this.webServerParam.set(
      value,
      result => {
      console.log(result);
      this.logService.setLogParam(this.paramName, value, result);}
    );
  }

  getWebServerObservable(): Observable<any>{
    if(!this.webServerParam){
      this.init();
    }
      return this.webServerSubject.asObservable();
  }
}
