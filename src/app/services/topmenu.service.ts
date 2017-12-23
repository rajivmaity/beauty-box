import { Injectable } from '@angular/core';
import { Menu } from '../models/Menu';

@Injectable()
export class TopmenuService {

  menus: Menu[];

  constructor() {
    this.menus = [
      { id: 1, menuName: 'Dashboard', fontAwesomeClass: 'dashboard', routerPath: '/dashboard', state: true},
      { id: 2, menuName: 'Members', fontAwesomeClass: 'users', routerPath: '/members', state: false},
      { id: 3, menuName: 'Merchants', fontAwesomeClass: 'handshake-o', routerPath: '/merchants', state: false},
      { id: 4, menuName: 'Products', fontAwesomeClass: 'barcode', routerPath: '/products', state: false},
      { id: 5, menuName: 'Orders', fontAwesomeClass: 'dollar', routerPath: '/orders', state: false},
      { id: 6, menuName: 'Promo Emails', fontAwesomeClass: 'sellsy', routerPath: '/promo-emails', state: false},
      { id: 7, menuName: 'Settings', fontAwesomeClass: 'user-secret', routerPath: '/settings', state: false}
    ];
  }

  returnMenuNames() {
    return this.menus;
  }

}
