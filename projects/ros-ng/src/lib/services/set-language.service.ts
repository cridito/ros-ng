import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

@Injectable()
export class SetLanguageService {

    constructor(
        private rosService: RosServiceService
    ) {

    }

    serviceName: string = 'naoqi_driver/set_language';
    serviceType: string = 'naoqi_bridge_msgs/SetString';
    request: { data: string } = { data: ''};

    setLanguage(language: string): Subject<any> {
        this.request.data = language;
        return this.rosService.callService(this.serviceName, this.serviceType, this.request);
    }
}
