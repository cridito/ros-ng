import { Injectable } from '@angular/core';
import { RosTopicService } from '../rostopic.service';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoreService {

  constructor(
    private rosTopic: RosTopicService
  ) { }

  topicName: string = '/shoreData';
  messageType: string = 'shore_msgs/msgShoreContent';

  getShoreData(): Subject<any>{
      return this.rosTopic.subscribeTopic(this.topicName, this.messageType);
    }

}
