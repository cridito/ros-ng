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

  getClients(): Subject<Clients> {
    return this.rosTopic.subscribeTopic(this.topicName, this.messageType);
  }
}

interface Clients {
  clients: {
    [index: number]:{
      ip_address: string;
      connection_time: {
        secs: number;
        nsecs: number;
      }
    }
  }
}
