import { NgModule, ModuleWithProviders } from '@angular/core';
import { RosNgComponent } from './ros-ng.component';
import { RosTopicService } from './rostopic.service';
import { RosconnectService } from './rosconnect.service';
import { RosServiceService } from './rosservice.service';

@NgModule({
  declarations: [RosNgComponent],
  imports: [
  ],
  exports: [RosNgComponent],
  providers: [
    RosTopicService,
    RosServiceService,
    RosconnectService
  ],
})
export class RosNgModule {

}
