import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

@Injectable()
export class TabletOffService {

    constructor(
        private rosService: RosServiceService
    ) {

    }
    serviceName: string = '/tablet_hidewebview';
    serviceType: string = 'faps_pepper_ros_bridge/TabletHideWebview';

  displayOff(): Subject<any> {
    return this.rosService.callService(this.serviceName, this.serviceType);
  }
}
