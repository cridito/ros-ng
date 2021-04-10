import { Injectable } from '@angular/core';
import { RosTopicService } from '../rostopic.service';
import { Subject } from 'rxjs';
import { Header } from '../interface/header';
import { GoalId } from '../interface/goal-id';

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
  message: BehaviorMessage;

  startBehavior(behavior: string): void {
    this.goalID = "goal" + Date.now() + behavior;
    this.message = {header : {seq: 0,stamp: 0,frame_id: ''}, goal_id:{stamp: {secs : 0,nsecs : 0},id: this.goalID},
                                                  goal:{behavior : behavior}};
    this.rosTopic.publishTopic(this.topicName, this.messageType, this.message);
  }

  // TODO
  stopBehavior():void{
  }

}

interface BehaviorMessage {
  header : {seq: number;stamp: number;frame_id: string;};
  goal_id: {stamp: {secs : number; nsecs : number;},id: string;};
  goal: {behavior : string}
}
