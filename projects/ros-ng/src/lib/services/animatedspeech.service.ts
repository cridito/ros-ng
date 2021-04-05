import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

@Injectable()
export class AnimatedspeechService {

  constructor(
    private rosService: RosServiceService
  ) {
  }
  serviceName: string = '/animated_speech';
  serviceType: string = 'faps_pepper_ros_bridge/AnimatedSpeech';
  request: {
    message: string;
    animation: string;
    mode: 'disabled';
    cancel: boolean;
  } = {
    message: '',
    animation: '',
    mode: 'disabled',
    cancel: false
  }

  stopBehavior(behavior: string, msg: string, cancel: boolean = true): Subject<any> {
    this.request.message = msg;
    this.request.animation = behavior;
    this.request.cancel = cancel;
    return this.rosService.callService(this.serviceName, this.serviceType, this.request);
  }

  startBehavior(behavior: string, msg: string, cancel: boolean = false): Subject<any> {
    this.request.message = msg;
    this.request.animation = behavior;
    this.request.cancel = cancel;
    return this.rosService.callService(this.serviceName, this.serviceType, this.request);
  }

}
