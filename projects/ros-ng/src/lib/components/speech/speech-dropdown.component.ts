import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpeechService } from '../../topics/speech.service'

@Component({
  selector: 'lib-speech-dropdown',
  template:  `
  <form [formGroup]="form" (ngSubmit)="submit()">
  <div class="form-group">
      <label for={{id}}>{{label}}</label>
      <select formControlName={{id}} id={{id}} class="form-control">
          <option *ngFor="let opt of options"value={{opt}}>{{opt}}</option>
      </select>
  </div>
  <button class="btn btn-primary" type="submit" [disabled]="!form.valid">{{buttonlabel}}</button>
</form>`,
  styles: [],
  providers: [SpeechService]
})
export class SpeechDropdownComponent implements OnInit {

  @Input() label: string = "Speech";
  @Input() buttonlabel: string = "Robot Say";
  @Input() options: string[] = ['test','test2'];

  id: string = "speechdropdown" + Math.floor((Math.random() * 10000) + 1);
  form: FormGroup;

  constructor(
    private speech: SpeechService
  ) {

  }

  ngOnInit(): void {
    let formcontrol = {};
    formcontrol[this.id] = new FormControl('',Validators.required);
    this.form = new FormGroup(
      formcontrol
    );
  }

   get f(){
     return this.form.controls;
   }

   submit(){
     this.speech.say(this.form.value[this.id])
   }
}
