import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

@Injectable()
export class GetLanguageService {

    constructor(
        private rosService: RosServiceService
    ) {

    }
    serviceName: string = 'naoqi_driver/get_language';
    serviceType: string = 'naoqi_bridge_msgs/GetString';

    getLanguage(): Subject<Object> {
        return this.rosService.callService(this.serviceName, this.serviceType);
    }
}
