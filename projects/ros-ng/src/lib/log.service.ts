import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LogService {

  logTopics: any[]=[];
  topicId: number = 0;

  logServices: any=[];
  serviceId: number = 0;

  logParam: any=[];
  paramId: number = 0;
  constructor(

  ) {
  }

  incTopicId(): void {
    this.topicId += 1;
  }

  setLogTopic(topicName: string, msgObject: any = null, type: string){
      this.incTopicId();
      const log: any = {id: this.topicId, type: type, topicname: topicName, topicdata: msgObject, timestamp: Date.now(), daytime: new Date().toLocaleTimeString()};
      //console.log(log);
      this.logTopics.push(log);
  }

  getLogTopics(): any[]{
    return this.logTopics;
  }

  incServiceId(): void {
    this.serviceId += 1;
  }

  setLogService(serviceName: string, requestObject: any="", result: any = ""){
      this.incServiceId();
      const log: any = {id: this.serviceId, servicename: serviceName, servicedata: requestObject, result: result, timestamp: Date.now(), daytime: new Date().toLocaleTimeString()}
      //console.log(log);
      this.logServices.push(log);
  }
  getLogServices(): any[] {
    return this.logServices;
  }

  incParamId(): void {
    this.paramId += 1;
  }

  setLogParam(paramName: string, value: any, result: any = ""){
      this.incParamId();
      const log: any = {id: this.paramId, paramname: paramName, value: value, result: result, timestamp: Date.now(), daytime: new Date().toLocaleTimeString()}
      //console.log(log);
      this.logServices.push(log);
  }
  getLogParams(): any[] {
    return this.logParam;
  }




}
