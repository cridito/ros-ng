import { Injectable } from '@angular/core';
import { RosTopicService } from '../rostopic.service';
import { Subject } from 'rxjs';

declare const ROSLIB: any;

@Injectable()
export class ClientCountService {

  constructor(
    private rosTopic: RosTopicService
  ) { }

  topicName: string = '/client_count';
  messageType: string = 'std_msgs/Int32';

  getClientCount(): Subject<Object> {
    return this.rosTopic.subscribeTopic(this.topicName, this.messageType);
  }
}
