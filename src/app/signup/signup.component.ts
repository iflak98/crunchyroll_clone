import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  // Use updateOn: 'blur' so validators run only after user leaves the field.
  emailFormGroup = this._formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  }, { updateOn: 'blur' });
  constructor(private _formBuilder: FormBuilder,private userService: UserService){}
  toggleShowPass(){
    const passInput= <HTMLInputElement>document.getElementById('password-form');
    if (passInput.type === "password") {

      passInput.type="text";
    } else {
      passInput.type = "password";
    }
  }
  signup() {
    // Assuming you would hash the password before saving it
    // const hashedPassword = hashFunction(this.emailFormGroup.value.password);
    const username=this.emailFormGroup.value.email;
    const password=this.emailFormGroup.value.password;
    const user = { username: username, password: password };
    this.userService.saveUsers(user).subscribe((res: any) => {
      console.log('User saved successfully',res);
    });
    
  }

}
