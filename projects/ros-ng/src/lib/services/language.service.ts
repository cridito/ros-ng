import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RosServiceService } from '../rosservice.service';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    languageSubject: Subject < string > ;

    constructor(
        private rosService: RosServiceService
    ) {
        this.languageSubject = new Subject < string > ();
    }

    getLanguage(): any {
        const serviceName = 'naoqi_driver/get_language';
        const serviceType = 'naoqi_bridge_msgs/GetString';
        this.rosService.callService(serviceName, serviceType).subscribe({
            next: result => {
                this.languageSubject.next(result['data']);
                console.log("Service: " + serviceName + " Value: " + result['data'] + " Status: " + result["success"]);
            },
            error: error => {
                this.languageSubject.error(error);
                console.log("Service: " + serviceName + "Error: " + error);
            }
        });

    }
    setLanguage(language: string): void {
        const serviceName = 'naoqi_driver/set_language';
        const serviceType = 'naoqi_bridge_msgs/SetString';
        let request = {
            data: language
        };
        this.rosService.callService(serviceName, serviceType, request).subscribe({
            next: result => {
                this.languageSubject.next(result);
                console.log("Service: " + serviceName + " Value: " + language + " Status: " + result["success"]);
            },
            error: error => {
                this.languageSubject.next(error);
                console.log("Service: " + serviceName + "Error: " + error);
            }
        });
    }

    getLanguageSub(): Subject < any > {
        return this.languageSubject;
    }
}
