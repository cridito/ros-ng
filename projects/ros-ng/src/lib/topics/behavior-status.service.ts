import { Injectable } from '@angular/core';
import { RosTopicService } from '../rostopic.service';
import { Subject } from 'rxjs';

@Injectable()

export class BehaviorStatusService {

    constructor(
      private rosTopic : RosTopicService
    ) {
    }

    //Subscriber
    topicName: string = '/run_behavior/status';
    messageType: string = 'actionlib_msgs/GoalStatusArray';

    getBehaviourStatus(): Subject<Object> {
      return this.rosTopic.subscribeTopic(this.topicName, this.messageType);
    }

}
