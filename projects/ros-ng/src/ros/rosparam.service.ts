import { Injectable } from '@angular/core';
import { RosconnectService } from './rosconnect.service';
import { Subject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

declare const ROSLIB: any;

@Injectable({
  providedIn: 'root'
})
export class RosParamService {


  //params: any[] = [];

  constructor(
    private pepper: RosconnectService,
    //private logService: LogService
  ) {

  }
  getRosParam(paramName: string): any {
    return new ROSLIB.Param({ros : this.pepper.ros,name : paramName});
  }

// getRosParam(paramName: string): {observable:Observable<any>,index: number} {
//   const param = new ROSLIB.Param({ros : this.pepper.ros,name : paramName});
//   this.params.push({param: param, subject: new Subject<any>()});
//   const index = this.params.length - 1;
//   this.params[index].param.get(
//     value => {
//       this.params[index].subject.next(value);
//       //this.logService.setLogParam(paramName, value);
//     }
//   );
//   return {
//     observable: this.params[index].subject.asObservable().pipe(
//     tap(message => this.logService.setLogParam(paramName, message))),index: index};
// }

// unsubscribeParamSub(index: number): void {
// this.params[index].param.unsubscribe();
// }
// setRosParam(paramName: string, value:any ): void{
//   const param = new ROSLIB.Param({ros : this.pepper.ros,name : paramName})
//   param.set(
//     value,
//     result => {console.log(result);
//     this.logService.setLogParam(paramName, value, result);}
//   );
// }
}
