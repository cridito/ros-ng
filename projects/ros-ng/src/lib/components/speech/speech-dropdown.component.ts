import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'lib-speech-dropdown',
  template:  `
  <form [formGroup]="form" (ngSubmit)="submit()">
  <div class="form-group">
      <label for={{id}}>{{label}}</label>
      <select formControlName={{id}} class="form-control">
          <option value="" disabled selected hidden>{{placeholder}}</option>
          <option *ngFor="let option of options">{{options}}</option>
      </select>
  </div>

  <button class="btn btn-primary" type="submit" [disabled]="!form.valid">Submit</button>
</form>`,
  styles: ["node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class SpeechDropdownComponent implements OnInit {

  @Input() type: "dropdown" | "input" = "input";
  @Input() label: string = "Speech";
  @Input() buttonlabel: string = "Robot Say";
  @Input() placeholder: string = "Select Speech-String";
  @Input() options: string[] = ['test','test2'] ;

  id: string;

  constructor() { }

  ngOnInit(): void {
    this.id = "speechinput" + Math.floor((Math.random() * 10000) + 1);
  }

   form = new FormGroup({
     test: new FormControl()
   });

   get f(){
     return this.form.controls;
   }

   submit(){
     console.log(this.form.value);
   }
}
