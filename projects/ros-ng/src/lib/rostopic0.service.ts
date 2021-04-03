import { Injectable } from '@angular/core';
import { RosconnectService } from './rosconnect.service';
import { Observable, Subject} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LogService } from './log.service';

declare const ROSLIB: any;

export class RosTopicService {

  topics: any[] = [];

  constructor(
    private pepper: RosconnectService,
    private logService: LogService
  ) {

  }

  publishTopic(topicName: string, messageType: string, msgObject: any = null) : void{
    const topic = new ROSLIB.Topic({ros : this.pepper.ros, name : topicName, messageType : messageType});
    let rosMessage: any;
    msgObject ? rosMessage = new ROSLIB.Message(msgObject) : rosMessage = new ROSLIB.Message();
    topic.publish(rosMessage);
    this.logService.setLogTopic(topicName,msgObject,"publish");
  }

  unsubscribeTopic(index){
    this.topics[index].topic.unsubscribe();
  }

  // subscribeTopic(topicName: string, messageType: string): BehaviorSubject<any> {
  //   const topic = new ROSLIB.Topic({ros : this.pepper.ros, name : topicName, messageType : messageType});
  //   topic.subscribe(
  //     message => {
  //       this.topicSub.next(message);
  //       this.logService.setLogTopic(topicName,message,"subscribe");
  //       if(this.unsubscribe){
  //         console.log("ichunsubscribe");
  //         this.unsubscribe = !this.unsubscribe;
  //         topic.unsubscribe();
  //         console.log("test");
  //         //this.topicSub.unsubscribe();
  //       }
  //     }
  //   );
  //   return this.topicSub;
  // }
  subscribeTopic(topicName: string, messageType: string): {observable:Observable<any>,index: number} {
    this.topics.push({topic: new ROSLIB.Topic({ros : this.pepper.ros, name : topicName, messageType : messageType}), subject: new Subject<any>()});
    const index = this.topics.length - 1;
    this.topics[index].topic.subscribe(
        message => {
          // console.log("test");
          this.topics[index].subject.next(message);}
    );
    return {observable: this.topics[index].subject.asObservable().pipe(
      tap(message => this.logService.setLogTopic(topicName,message,"subscribe"))
      // tap(message => console.log(topicName,message,"subscribe"))
    ),index: index};
  }


}
