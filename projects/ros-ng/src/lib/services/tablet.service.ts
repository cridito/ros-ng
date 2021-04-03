import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

@Injectable({
  providedIn: 'root'
})
export class TabletService {

  tabletSubject: Subject<any>;

  constructor(
    private rosService: RosServiceService
  ) {
    this.tabletSubject = new Subject<any>();
  }

  displayOn(): void{
    const serviceName = '/tablet_webviewblank';
    const serviceType = 'faps_pepper_ros_bridge/TabletWebviewBlank';
    this.rosService.callService(serviceName, serviceType).subscribe(
        { next: result => {
            this.tabletSubject.next(result);
            console.log("Service: " + serviceName + " Value: DisplayOn Status: " + result["success"]);
          },
          error: error => {
            this.tabletSubject.error(error);
            console.log("Service: " + serviceName + "Error: " +  error);
          }
        }
    );
  }

    displayOff(): void{
      const serviceName = '/tablet_hidewebview';
      const serviceType = 'faps_pepper_ros_bridge/TabletHideWebview';
      let request = {name : ''};
      this.rosService.callService(serviceName, serviceType, request).subscribe(
          { next: result => {
              this.tabletSubject.next(result);
              console.log("Service: " + serviceName + " Value: Off Status: " + result);
            },
            error: error => {
              this.tabletSubject.error(error);
              console.log("Service: " + serviceName + "Error: " +  error);
            }
          }
      );
    }

    loadTabletPage(url:string):void {
      const serviceName = '/tablet_webview';
      const serviceType = 'faps_pepper_ros_bridge/TabletWebview';
      let request = {name : url};
      this.rosService.callService(serviceName, serviceType, request).subscribe(
          { next: result => {
              this.tabletSubject.next(result);
              console.log("Service: " + serviceName + " Value: " + url + " Status: " + result);
            },
            error: error => {
              this.tabletSubject.error(error);
              console.log("Service: " + serviceName + "Error: " +  error);
            }
          }
      );
    }

    getTabletSub(): Subject<any> {
      return this.tabletSubject;
    }

}
