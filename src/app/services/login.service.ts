import { Injectable } from '@angular/core';
import { Login } from '../models/Login';

@Injectable()
export class LoginService {

  loginInfo: Login;

  constructor() { }

  checkLogin(loginData: Login) {
    if (loginData.emailAddress === 'admin' || loginData.password === 'admin') {
        return true;
    } else {
      return false;
    }
  }

}
