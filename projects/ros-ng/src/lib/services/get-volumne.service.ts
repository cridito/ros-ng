import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

@Injectable()
export class GetVolumneService {

    constructor(
        private rosService: RosServiceService
    ) {

    }
    serviceName: string = '/volume_state';
    serviceType: string = 'faps_pepper_ros_bridge/GetVolume';


    getVolumne(): Subject<any>  {
        return this.rosService.callService(this.serviceName, this.serviceType);
    }
}
