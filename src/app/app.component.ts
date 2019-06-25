import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { equal } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LogInValidation';
  passWord;
  confirmPassword:string;
  logInForm: FormGroup;
  constructor(public formBuilder: FormBuilder){
    this.logInForm = formBuilder.group({
      eMail : ["",[Validators.email]],
      passWord : ["",[Validators.pattern('^[a-zA-Z0-9!@#$%&]+$'),Validators.required, Validators.min(8)]],
      confirmPassword : ["",[Validators.required]]
    })
  }
}
