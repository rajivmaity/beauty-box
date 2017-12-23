import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../models/Menu';
import { TopmenuService } from '../../../services/topmenu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  menus: Menu[];
  menu: Menu;

  constructor(
    private topmenuService: TopmenuService,
    private router: Router
  ) { }

  ngOnInit() {
    this.menus = this.topmenuService.returnMenuNames();
  }

  navigateMenu(menuObject) {
    this.menu = menuObject;
    for (let i = 0; i < this.menus.length; i++) {
      if (this.menu.id === this.menus[i].id) {
        // do nothing
      } else {
        this.menus[i].state = false;
      }
    }
    this.menu.state = true;
    this.router.navigate([this.menu.routerPath]);
  }

}
