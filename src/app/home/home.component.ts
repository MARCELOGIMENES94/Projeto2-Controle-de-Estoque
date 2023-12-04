import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loginCard = true;

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],

  });
  signupForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],

  });


  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService
    ) {}

  onSubmitLoginForm(): void {
    console.log('DADOS DO FORMULARIO DE LOGIN', this.loginForm.value);
  }

  onSubmitSignupForm() : void {
    console.log('DADOS DO FORMULARIO DE CADASTRO', this.signupForm.value);
  }
  

}
