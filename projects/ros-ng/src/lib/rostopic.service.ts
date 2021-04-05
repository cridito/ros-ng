import { Injectable } from '@angular/core';
import { RosconnectService } from './rosconnect.service';
import { Subject } from 'rxjs';
import { LogService } from './log.service';
import * as ROSLIB from 'roslib';

@Injectable()
export class RosTopicService {

  //topic: ROSLIB.Topic;

  constructor(private pepper: RosconnectService, private logService: LogService)
  {}

  publishTopic(topicName: string, messageType: string, msgObject: Object = null) : void{
    const topic = new ROSLIB.Topic({ros : this.pepper.ros, name : topicName, messageType : messageType});
    topic.publish(msgObject ? new ROSLIB.Message(msgObject) : new ROSLIB.Message());
    this.logService.setLogTopic(topicName,msgObject,"publish");
  }

  subscribeTopic(topicName: string, messageType: string): Subject<any>{
    const topic = new ROSLIB.Topic({ros : this.pepper.ros, name : topicName, messageType : messageType});
    const topicsubscribe = new Subject<any>();
    topic.subscribe(
      message => {
        topicsubscribe.next(message);
        this.logService.setLogTopic(topicName,message,"subscribe");
      }
    );
    return topicsubscribe;
  }
}
