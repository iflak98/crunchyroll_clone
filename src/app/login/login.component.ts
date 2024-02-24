import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

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
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder,private userService: UserService,private router:Router) { }
  ngOnInit(): void {

  }



  login() {
    this.userService.getUsers().subscribe((users: any[]) => {
      const user = users.find((u: { username: string; }) => u.username === this.emailFormGroup.value.email);
      if (user && user.password === this.emailFormGroup.value.password) {
        this.userService.setloginauth(true);
        localStorage.setItem('isLoggedin', JSON.stringify(user));
        this.userService.getloginauth().subscribe(res=>console.log("Auth status : ", res));

        console.log('Login successful',);
        this.router.navigate(['home']);
        // this.userService.setloginau/th(fa)
        
        // Redirect to another component or perform any other action


      } else {
        console.log('Invalid credentials');
      }
    });
  }
  toggleShowPass(){
    const passInput= <HTMLInputElement>document.getElementById('password-form');
    if (passInput.type === "password") {

      passInput.type="text";
    } else {
      passInput.type = "password";
    }
  }

}