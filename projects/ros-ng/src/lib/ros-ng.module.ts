import { NgModule, ModuleWithProviders } from '@angular/core';
import { RosNgComponent } from './ros-ng.component';
import { RosTopicService } from './rostopic.service';
import { RosconnectService } from './rosconnect.service';
import { RosServiceService } from './rosservice.service';
import { RosParamService } from './rosparam.service';
import { SpeechDropdownComponent } from './components/speech/speech-dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RosNgComponent, SpeechDropdownComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RosNgComponent, SpeechDropdownComponent],
  providers: [
    RosTopicService,
    RosServiceService,
    RosParamService,
    RosconnectService
  ],
})
export class RosNgModule {

}
