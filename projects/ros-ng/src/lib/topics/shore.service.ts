import { Injectable } from '@angular/core';
import { RosTopicService } from '../rostopic.service';
import { Subject } from 'rxjs';
import { Header } from '../interface/header';


@Injectable()
export class ShoreService {

  constructor(
    private rosTopic: RosTopicService
  ) { }

  topicName: string = '/shoreData';
  messageType: string = 'shore_msgs/msgShoreContent';

  getShoreData(): Subject<ShoreMessage>{
      return this.rosTopic.subscribeTopic(this.topicName, this.messageType);
    }

}

interface ShoreMessage {
  header: Header;
  id: number;
  numObjects: number;
  objects: {
      header: Header;
      objectNo: number;
      faceSize: number;
      midX: number;
      midY: number;
      type: string;
      region:{
        left: number;
        right: number;
        top: number;
        bottom: number;
      }
      markers: [];
      attribute: {
        gender: string;
        pitch: string;
        roll: string;
        yaw: string;
      }
      ratings: {
        age: number;
        age_deviation: number;
        anger: number;
        happiness: number;
        surprise: number;
        sadness: number;
        female_rate: number;
        male_rate: number;
        face_score: number;
      }
      parts: [];
    }
}
