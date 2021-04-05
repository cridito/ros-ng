import { Injectable } from '@angular/core';
import { RosTopicService } from '../rostopic.service';
import { Subject } from 'rxjs';


@Injectable()
export class SpeechService {

  constructor(
    private rosTopic: RosTopicService
  ) { }

  topicName: string = '/speech';
  messageType: string = 'std_msgs/String';
  message: { [data:string]: string } = { data : ''};

  say(msg: string): void{
    this.message.data = msg;
    this.rosTopic.publishTopic(this.topicName, this.messageType, this.message);
  }

  getSpeechData(): Subject<Object>{
    return this.rosTopic.subscribeTopic(this.topicName, this.messageType);
  }


}
