import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/globals';
import { AuthenticationService } from '../../../service/authentication.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = 'anna1@gmail.com'
  password = '1234'
  invalidLogin: Boolean;
  angForm: FormGroup;
  constructor(private router: Router,
    private loginservice: AuthenticationService, public globals: Globals, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.angForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }




  checkLogin() {
    if (this.loginservice.authenticate(this.email, this.password)
    ) {
      if(this.globals.mode == "user")
      {
        this.router.navigate(['account'])
      }
      else if(this.globals.mode =="admin")
      {
        this.router.navigate(['admin']);
      }
      this.invalidLogin = false
      
    } else
      this.invalidLogin = true
  }

}