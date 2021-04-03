import { Injectable } from '@angular/core';
import { RosParamService } from '../../services/rosparam.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RobotIpService {

  constructor(
    private rosParam: RosParamService
  ) { }

  paramName: string = 'Pepper_IP';

  // setRobotIp(value: string): void{
  //   this.rosParam.setRosParam(this.paramName, value);
  // }
  //
  // getRobotIp(): {observable:Observable<string>,index: number}{
  //   return this.rosParam.getRosParam(this.paramName);
  // }


  }
