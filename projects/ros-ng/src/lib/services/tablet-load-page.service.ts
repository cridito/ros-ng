import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

@Injectable()
export class TabletLoadPageService {

    constructor(
        private rosService: RosServiceService
    ) {

    }
    serviceName: string = '/tablet_webview';
    serviceType: string = 'faps_pepper_ros_bridge/TabletWebview';
    request: { name: string } = {name : ''};

  loadPage(url: string): Subject<any> {
    this.request.name = url;
    return this.rosService.callService(this.serviceName, this.serviceType, this.request);
  }
}
