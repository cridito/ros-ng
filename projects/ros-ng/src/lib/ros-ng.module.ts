import { NgModule, ModuleWithProviders } from '@angular/core';
import { RosNgComponent } from './ros-ng.component';
import { RosTopicService } from './rostopic.service';
import { RosconnectService } from './rosconnect.service';
import { RosServiceService } from './rosservice.service';
import { RosParamService } from './rosparam.service';
import { SpeechDropdownComponent } from './components/speech/speech-dropdown.component';
import { SpeechInputComponent } from './components/speech/speech-input.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RosNgComponent,
    SpeechDropdownComponent,
    SpeechInputComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    RosNgComponent,
    SpeechDropdownComponent,
    SpeechInputComponent
  ],
  providers: [
    RosTopicService,
    RosServiceService,
    RosParamService,
    RosconnectService
  ],
})
export class RosNgModule {

}
