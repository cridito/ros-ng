import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

@Injectable()

export class RestService {

  constructor(
    private rosService: RosServiceService
  ) {

  }
  serviceName: string = '/pepper_robot/pose/rest';
  serviceType: string = 'std_srvs/Empty';

  rest(): Subject<any> {
      return this.rosService.callService(this.serviceName, this.serviceType);
    }
}
