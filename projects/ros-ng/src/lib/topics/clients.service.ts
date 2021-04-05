import { Injectable } from '@angular/core';
import { RosTopicService } from '../rostopic.service';
import { Subject } from 'rxjs';

declare const ROSLIB: any;

@Injectable()
export class ClientsService {

  constructor(
    private rosTopic: RosTopicService
  ) { }

  topicName: string = '/connected_clients';
  messageType: string = 'rosbridge_msgs/ConnectedClients';

  getClients(): Subject<Object> {
    return this.rosTopic.subscribeTopic(this.topicName, this.messageType);
  }
}
