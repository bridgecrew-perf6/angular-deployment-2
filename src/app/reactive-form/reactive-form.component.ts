import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form = new FormGroup({
    account: new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(3), UsernameValidators.cannotContainSpace], UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
    })

  })

  constructor() { }

  get username(){
   return this.form.get('account.username');
  }
  login(){
    // authService.login(this.form.value)
    //if (this.form.get('account.username').value.length < 1 && this.form.get('account.password').value.length < 1 ) {
      this.form.setErrors({
      invalidLogin:true
    })
   // }
  }
  

  ngOnInit(): void {
  }

}
