import { Injectable } from '@angular/core';
import { RosTopicService } from '../rostopic.service';
import { Subject } from 'rxjs';


@Injectable()
export class ShoreService {

  constructor(
    private rosTopic: RosTopicService
  ) { }

  topicName: string = '/shoreData';
  messageType: string = 'shore_msgs/msgShoreContent';

  getShoreData(): Subject<Object>{
      return this.rosTopic.subscribeTopic(this.topicName, this.messageType);
    }

}
