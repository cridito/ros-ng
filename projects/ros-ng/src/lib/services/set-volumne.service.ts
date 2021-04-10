import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

@Injectable()
export class SetVolumneService {

    constructor(
        private rosService: RosServiceService
    ) {

    }
    serviceName: string = '/volume_setting';
    serviceType: string = 'faps_pepper_ros_bridge/SetVolume';
    request: { percent: number } = { percent : 70 };

    setVolumne(volumne: number): Subject<any>  {
        this.request.percent = volumne;
        return this.rosService.callService(this.serviceName, this.serviceType, this.request);
    }
}
