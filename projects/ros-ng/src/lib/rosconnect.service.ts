import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as ROSLIB from 'roslib';

@Injectable()

export class RosconnectService {
      ros: ROSLIB.Ros;
      rosconnection: Subject<number>;
      websocketUrl: string = "ws://roswebsocket:9090";
      constructor()
      {
        this.rosconnection = new Subject<number>();
        this.connect(this.websocketUrl);
      }

      connect(websocketUrl){
          this.ros = new ROSLIB.Ros({
              url: websocketUrl
          });

          this.ros.on('connection',(socket,msg = "Connected to websocket server.") => {
            console.log(msg);
            this.rosconnection.next(0)
          });

          this.ros.on('error', (error,msg = 'Error connecting to websocket server: ') => {
            console.log(msg);
            this.rosconnection.next(1)
            });

          this.ros.on('close', (socket,msg = 'Connection to websocket server closed.') => {
            console.log(msg);
            this.rosconnection.next(2)
            });
      }




  }

/*

          BehaviorResult :
            function (sub = 0){
              switch(sub){
                case 0: behaveresult.subscribe(function(message){output(message); behaveresult.unsubscribe();}); break;
                case 1: behaveresult.subscribe(function(message){output(message);}); break;
                case 2: behaveresult.unsubscribe(); break;
                default: behaveresult.subscribe(function(message){output(message); behaveresult.unsubscribe();}); break;
              }
            },
          BehaviorStatus :
            function (sub = 0){
              switch(sub){
                case 0: behavestatus.subscribe(function(message){output(message); behavestatus.unsubscribe();}); break;
                case 1: behavestatus.subscribe(function(message){output(message);}); break;
                case 2: behavestatus.unsubscribe(); break;
                default: behavestatus.subscribe(function(message){output(message); behavestatus.unsubscribe();}); break;
              }
            },
          PongTime :
            function (sub = 0){
              switch(sub){
                case 0: pongtime.subscribe(function(message){output(message); pongtime.unsubscribe();}); break;
                case 1: pongtime.subscribe(function(message){output(message);}); break;
                case 2: pongtime.unsubscribe(); break;
                default: pongtime.subscribe(function(message){output(message); pongtime.unsubscribe();}); break;
              }
            },
          PongJoy :
            function (sub = 0){
              switch(sub){
                case 0: pongjoy.subscribe(function(message){output(message); pongjoy.unsubscribe();}); break;
                case 1: pongjoy.subscribe(function(message){output(message);}); break;
                case 2: pongjoy.unsubscribe(); break;
                default: pongjoy.subscribe(function(message){output(message); pongjoy.unsubscribe();}); break;
              }
            },
          PongGame :
            function (sub = 0){
              switch(sub){
                case 0: ponggame.subscribe(function(message){output(message); ponggame.unsubscribe();}); break;
                case 1: ponggame.subscribe(function(message){output(message);}); break;
                case 2: ponggame.unsubscribe(); break;
                default: ponggame.subscribe(function(message){output(message); ponggame.unsubscribe();}); break;
              }
            },
          ShoreData :
            function (sub = 0){
              switch(sub){
                case 0: shoredata.subscribe(function(message){output(message); shoredata.unsubscribe();}); break;
                case 1: shoredata.subscribe(function(message){output(message);}); break;
                case 2: shoredata.unsubscribe(); break;
                default: shoredata.subscribe(function(message){output(message); shoredata.unsubscribe();}); break;
              }
            }

        }


          WakeUp :
            function() {
              var request = new ROSLIB.ServiceRequest({});
              wakeup.callService(request, function(result) {});
            },





          StiffnessOn  :
          function (){
            var request = new ROSLIB.ServiceRequest();
            stiffon.callService(request, function(result) {});
          },
          StiffnessOff  :
          function (){
            var request = new ROSLIB.ServiceRequest();
            stiffoff.callService(request, function(result) {});
          },
          LifeOn  :
          function (){
            var request = new ROSLIB.ServiceRequest();
            lifeon.callService(request, function(result) {});
          },
          LifeOff  :
          function (){
            var request = new ROSLIB.ServiceRequest();
            lifeoff.callService(request, function(result) {});
          },




        const behavestatus  = new ROSLIB.Topic({ros : that.ros, name : '/run_behavior/status', messageType : 'actionlib_msgs/GoalStatusArray'});
        const behaveresult  = new ROSLIB.Topic({ros : that.ros, name : '/run_behavior/result', messageType : 'naoqi_bridge_msgs/RunBehaviorActionResult'});
        const ponggame      = new ROSLIB.Topic({ros : that.ros, name : '/pong_game', messageType : 'pepper/pong_game'});
        const pongtime      = new ROSLIB.Topic({ros : that.ros, name : '/pong_time', messageType : 'pepper/pong_time'});
        const pongjoy       = new ROSLIB.Topic({ros : that.ros, name : '/pong_joy', messageType : 'pepper/pong_joy'});
        const shoredata     = new ROSLIB.Topic({ros : that.ros, name : '/shoreData', messageType : 'shore_msgs/msgShoreContent'});

        const getlanguage   = new ROSLIB.Service({ros : that.ros,name : 'naoqi_driver/get_language',serviceType : 'naoqi_bridge_msgs/GetString'});

        const stiffon       = new ROSLIB.Service({ros : that.ros,name : '/pepper_robot/pose/body_stiffness/enable',serviceType : 'std_srvs/Empty'});
        const stiffoff      = new ROSLIB.Service({ros : that.ros,name : '/pepper_robot/pose/body_stiffness/disable',serviceType : 'std_srvs/Empty'});
        const lifeon        = new ROSLIB.Service({ros : that.ros,name : '/pepper_robot/pose/life/enable',serviceType : 'std_srvs/Empty'});
        const lifeoff       = new ROSLIB.Service({ros : that.ros,name : '/pepper_robot/pose/life/disable',serviceType : 'std_srvs/Empty'});
        */
