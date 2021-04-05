import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

@Injectable()
export class TabletOnService {

    constructor(
        private rosService: RosServiceService
    ) {

    }
    serviceName: string = '/tablet_webviewblank';
    serviceType: string = 'faps_pepper_ros_bridge/TabletWebviewBlank';

  displayOn(): Subject<any>{
    return this.rosService.callService(this.serviceName, this.serviceType);
  }
}
