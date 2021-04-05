import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

@Injectable()

export class WakeupService {

  constructor(
    private rosService: RosServiceService
  ) {

  }
  serviceName: string = '/pepper_robot/pose/wakeup';
  serviceType: string = 'std_srvs/Empty';

  wakeUp(): Subject<Object> {
      return this.rosService.callService(this.serviceName, this.serviceType);
    }
}
