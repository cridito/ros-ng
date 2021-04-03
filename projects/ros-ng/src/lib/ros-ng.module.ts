import { NgModule, ModuleWithProviders } from '@angular/core';
import { RosNgComponent } from './ros-ng.component';
import { RosTopicService } from './rostopic.service';
@NgModule({
  declarations: [RosNgComponent],
  imports: [
  ],
  exports: [RosNgComponent],
  providers: [
    RosTopicService
  ],
})
export class RosNgModule {

}
