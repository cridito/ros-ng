import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';


@Injectable({
  providedIn: 'root'
})
export class VolumeService {

  volumeSubject: Subject<any>;

  constructor(

    private rosService: RosServiceService
  ) {
    this.volumeSubject = new Subject<any>();
  }

  getVolume(): any {
    const serviceName = '/volume_state';
    const serviceType = 'faps_pepper_ros_bridge/GetVolume';
    this.rosService.callService(serviceName, serviceType).subscribe(
        { next: result => {
          this.volumeSubject.next(result['data']);
          console.log("Service: " + serviceName + " Value: " + result['data'] + " Status: " + result["success"]);
          },
          error: error => {
            this.volumeSubject.error(error);
            console.log("Service: " + serviceName + "Error: " +  error);
          }
        }
    );

  }
  setVolume(volume: number): void{
    console.log("volume:");
    console.log(volume);
      const serviceName = '/volume_setting';
      const serviceType = 'faps_pepper_ros_bridge/SetVolume';
      let request = {percent : volume};
      this.rosService.callService(serviceName, serviceType, request).subscribe(
          { next: result => {
              this.volumeSubject.next(result);
              console.log("Service: " + serviceName + " Value: "+ result["feedback"]);
            },
            error: error => {
                this.volumeSubject.next(error);
                console.log("Service: " + serviceName + "Error: " +  error);
              }
          }
      );
    }


  getVolumeSub(): Subject<any> {
    return this.volumeSubject;
  }

}
