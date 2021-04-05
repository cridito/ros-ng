import { Injectable } from '@angular/core';
import { RosTopicService } from '../rostopic.service';
import { Subject } from 'rxjs';
import { Header } from '../interface/header';
import { GoalId } from '../interface/goal-id';

@Injectable()

export class BehaviorStatusService {

    constructor(
      private rosTopic : RosTopicService
    ) {
    }

    //Subscriber
    topicName: string = '/run_behavior/status';
    messageType: string = 'actionlib_msgs/GoalStatusArray';

    getBehaviourStatus(): Subject<any> {
      return this.rosTopic.subscribeTopic(this.topicName, this.messageType);
    }

}

interface BehaviorStatus {
    header : Header;
    status_list: {
      [index: number]:{
        goal_id: GoalId;
        status: number;
        text: string;
      }
    };
}
