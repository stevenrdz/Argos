import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService:AuthService) { }

  ngOnInit(): void {
  }

  /* login(){
    this.router.navigateByUrl('dashboard');
  } */

  login(){
    const { email, password } = this.miFormulario.value;
    console.log(email, password);

    this.authService.login(email, password)
    .subscribe(ok => {
      if(ok === true){
        this.router.navigateByUrl('/dashboard');
      }
      else{
        console.log('error')
      }
    })
  }

}
