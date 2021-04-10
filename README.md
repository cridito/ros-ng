# RosNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.
RosNg is a library for an easy integration of ros in angular projects. RosNg contains services to control rostopic, -services, -parameters. In addition, RosNg contains RosTopics and -Services for example to set and get the language of the robot or to start behaviors of a robot.
Furthermore, RosNg contains components for an simple use of RosElements. 

## Build

```
cd ~
git clone https://github.com/cridito/ros-ng.git
cd ros-ng
npm install
ng build
cp -r ~/ros-ng/dist/ros-ng nodemodule/folder/of/current/projectType
```

## Use in your Project

Import RosNgModule in App Module off your project.
```
...
import { RosNgModule } from 'ros-ng';

@NgModule({
  ...
  imports: [
    ...
    RosNgModule
  ],
...
```

Now, you can use the ros-ng module in the following three ways.

**Ros-Service, Ros-Topic, Ros-Param**

The three services below could use to connect own Topics, Services or Parameter.
```
...
import { RosParamService } from 'ros-ng';
import { RosTopicService } from 'ros-ng';
import { RosTopicService } from 'ros-ng';
...
  constructor(
    private rosParam: RosParamService,
    private rosTopic: RosTopicService,
    private rosService: RosServiceService
  ...
```  
*Ros-Topic Methods*
```
publishTopic(topicName: string, messageType: string, msgObject: Object = null): void
subscribeTopic(topicName: string, messageType: string): Subject<any>
```
*Ros-Service Methods*
```
callService(serviceName: string, serviceType: string, requestObject: Object = null): Subject<any>
```
*Ros-Parameter Methods*
```
getRosParam(paramName: string): Observable<any>
setRosParam(paramName: string, value: any): Observable<any>
```
**Implemented topics and services**

Use in ts file of component.

```
import { SpeechService } from 'ros-ng';
...
@Component({
  ...
  providers: [SpeechService]
  })
export class AppComponent {
  constructor(
    private speech: SpeechService
  ){}
  ...
}
```
*Services*

| Services  | Methods |
| ------------ | -------- |
|  AnimatedspeechService | stopBehavior(behavior: string, msg: string, cancel: boolean = true): Subject\<any> <br />startBehavior(behavior: string, msg: string, cancel: boolean = false): Subject\<any> |
|  GetLanguageService | getLanguage(): Subject<any> |
| SetLanguageService  | setLanguage(language: string): Subject<any> |
|  GetVolumneService | getVolumne(): Subject<any> |
|  SetVolumneService | setVolumne(volumne: number): Subject<any> |
|  RestService | rest(): Subject<any> |
|  WakeupService |  wakeUp(): Subject<any> |
|  TabletLoadPageService | loadPage(url: string): Subject<any> |
|  TabletOnService | displayOn(): Subject<any> |
|  TabletOffService | displayOff(): Subject<any> |

*Topics*

| Topics  | Methods |
| ------------ | -------- |
|  BehaviorStatusService | getBehaviorStatus(): Subject<BehaviorStatus> |
|  BehaviorService  | startBehavior(behavior: string): void |
|  ClientCountService | getClientCount(): Subject<ClientCount> |
|  ClientService |   getClients(): Subject<Clients> |
|  ShoreService |   getShoreData(): Subject<ShoreMessage> |
|  SpeechService |   say(msg: string): void <br />getSpeechData(): Subject<SpeechMessage> |

**Implemented components**

Use in html file of component.

```
<lib-speech-dropdown label='Robot Say' buttonlabel='Say' [options]="['Hello','World']"></lib-speech-dropdown>
<lib-speech-input></lib-speech-input>
```

| Component  | Selector | Parameter |
| ------------ | -------- | -------- |
|  SpeechDropdownComponent | lib-speech-dropdown | label: string<br /> buttonlabel: string<br /> options: string[]|
|  SpeechInputComponent  | lib-speech-input | label: string<br /> buttonlabel: string |
