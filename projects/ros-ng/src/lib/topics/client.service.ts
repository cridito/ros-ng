import { Injectable } from '@angular/core';
import { RosTopicService } from '../rostopic.service';
import { Subject } from 'rxjs';

declare const ROSLIB: any;

@Injectable()
export class ClientService {

  constructor(
    private rosTopic: RosTopicService
  ) { }

  topicName: string = '/client_count';
  messageType: string = 'std_msgs/Int32';

  getClientTopic(): Subject<Object> {
    return this.rosTopic.subscribeTopic(this.topicName, this.messageType);
  }
}
