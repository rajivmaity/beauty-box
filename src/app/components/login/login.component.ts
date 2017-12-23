import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Login } from '../../models/Login';
import { LoginService } from '../../services/login.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo: Login = {
    emailAddress: '',
    password: '',
    isLoginValid: false
  };

  constructor(
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    private title: Title,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.title.setTitle('My Shop - Login');
  }

  // check login form submission credibility with LoginService
  onSubmit({value, valid}: {value: Login, valid: boolean}) {
    if (!valid) {
      this.flashMessagesService.show('Please mention login details', {
        cssClass: 'alert-danger',
        timeout: '4000'
      });
    } else {
      this.loginService.checkLogin(value);
      if (this.loginService.checkLogin(value)) {
        this.flashMessagesService.show('logged in', {
          cssClass: 'alert-success',
          timeout: '4000'
        });
        this.router.navigate(['dashboard']);
      } else {
        this.flashMessagesService.show('Invalid login', {
          cssClass: 'alert-danger',
          timeout: '4000'
        });
      }
    }
  }

}
