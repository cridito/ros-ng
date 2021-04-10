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
  message: SpeechMessage = { data : ''};

  say(msg: string): void {
    this.message.data = msg;
    this.rosTopic.publishTopic(this.topicName, this.messageType, this.message);
  }

  getSpeechData(): Subject<SpeechMessage> {
    return this.rosTopic.subscribeTopic(this.topicName, this.messageType);
  }

}

interface SpeechMessage {
    data: string
}
