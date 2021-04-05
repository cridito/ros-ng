import { Injectable } from '@angular/core';
import { RosTopicService } from '../rostopic.service';
import { Subject } from 'rxjs';

@Injectable()
export class BehaviorService {

  constructor(
    private rosTopic : RosTopicService
  ) {
  }

  //Subscriber
  topicName: string = '/run_behavior/goal';
  messageType: string = 'naoqi_bridge_msgs/RunBehaviorActionGoal';
  goalID: string;
  message: Object;

  startBehavior(behavior: string): void{
    this.goalID = "goal" + Date.now() + behavior;
    this.message = {header : {seq: 0,stamp: 0,frame_id: ''}, goal_id:{stamp: {secs : 0,nsecs : 0},id: this.goalID},
                                                  goal:{behavior : behavior}};
    this.rosTopic.publishTopic(this.topicName, this.messageType, this.message);
  }

  // TODO
  stopBehavior():void{
  }

}
