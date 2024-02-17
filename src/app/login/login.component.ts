import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent   implements OnInit{
  phoneFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    phoneNum: '+91'
  });
  emailFormGroup = this._formBuilder.group({
    email: [''],
    password: [''],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {

  }

}