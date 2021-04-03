import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

@Injectable({
  providedIn: 'root'
})
export class AnimatedspeechService {

  animatedSpeechSubject: Subject<string>;
  behaviorStatusSubject: BehaviorSubject<any>;
  behaviorStatus: number;
  constructor(
    private rosService: RosServiceService
  ) {
    this.animatedSpeechSubject = new Subject<any>();
  }
  stopBehavior(behavior: string, msg: string, cancel: boolean = false): any {
    const serviceName = '/animated_speech';
    const serviceType = 'faps_pepper_ros_bridge/AnimatedSpeech';
    let request = {message :msg, animation : behavior, mode : 'disabled', cancel : cancel};
    const rosServiceSub = this.rosService.callService(serviceName, serviceType, request).subscribe(
        { next: result => {

              this.animatedSpeechSubject.next(result);
              // rosServiceSub.unsubscribe();
              console.log("Service: " + serviceName + " Value: AnimatedSpeech Status: " + result.feedback);
          },
          error: error => {
              this.animatedSpeechSubject.error(error);
              rosServiceSub.unsubscribe();
              console.log("Service: " + serviceName + "Error: " +  error);
          }
        }
    );
  }


  execBehavior(behavior: string, msg: string, cancel: boolean = false): void {
    const serviceName = '/animated_speech';
    const serviceType = 'faps_pepper_ros_bridge/AnimatedSpeech';
    let request = {message :msg, animation : behavior, mode : 'disabled', cancel : cancel};
    const rosServiceSub = this.rosService.callService(serviceName, serviceType, request);
    rosServiceSub.subscribe(
        { next: result => {
            console.log(result);
              this.animatedSpeechSubject.next(result);
              // rosServiceSub.unsubscribe();
              console.log("Service: " + serviceName + " Value: AnimatedSpeech Status: " + result.feedback);
          },
          error: error => {
              this.animatedSpeechSubject.error(error);
              // rosServiceSub.unsubscribe();
              console.log("Service: " + serviceName + "Error: " +  error);
          }
        }
    );
  }

  /*getbehaviorStatusSubject(): BehaviorSubject<any>{
    return this.behaviorStatusSubject;
  }

  getRunningBehaviourStatus(goalID: string = '', behavior){
    const topicName: string = '/run_behavior/status';
    const messageType: string = 'actionlib_msgs/GoalStatusArray';
    const labelarr = behavior.split("/");
    const label = labelarr[labelarr.length - 1];
    let statusID: number = 10;
    this.behaviorStatus = 1;

    const status: any = this.rosTopic.subscribeTopic(topicName, messageType);
    status.subscribe(
      message => {
        if(message.status_list.length == 1){
          message.status_list.forEach((item,index) => {
             if(item['goal_id']['id']==goalID){
                 if(item['status'] != statusID){
                    statusID = item['status'];
                    this.behaviorStatusSubject.next({statusId: statusID, statusMessage: this.getGoalStatusMessage(statusID), goalid: goalID, label: label});
                    console.log(statusID);
                    if(statusID > 1){
                      console.log("ichbinfertig");
                        //this.rosTopic.unsubscribe();
                        status.unsubscribe();
                       }
                     }
                   }
            }
          );
        }
      }
    );
  }*/

  getAnimatedSpeechSub(): Subject<any> {
    return this.animatedSpeechSubject;
  }

  private getGoalStatusMessage(statusID: number): string{
    switch(statusID){
      case 0:  return("The goal has yet to be processed by the action server!");
          break;
      case 1:  return("The goal is currently being processed by the action server!");
          break;
      case 2:  return("The goal received a cancel request after it started executing and has since completed its execution!");
          break;
      case 3:  return("The goal was achieved successfully by the action server!");
          break;
      case 4:  return("The goal was aborted during execution by the action server due to some failure!");
          break;
      case 5:  return("The goal was rejected by the action server without being processed, because the goal was unattainable or invalid!");
          break;
      case 6:  return("The goal received a cancel request after it started executing and has not yet completed execution!");
          break;
      case 7:  return("The goal received a cancel request before it starte_viewerd executing, but the action server has not yet confirmed that the goal is canceled!");
          break;
      case 8:  return("The goal received a cancel request before it started executing and was successfully cancelled!");
          break;
      case 9:  return("An action client can determine that a goal is LOST. This should not be sent over the wire by an action server!");
          break;
      default: return("PEPPER!");

    }
  }
}
