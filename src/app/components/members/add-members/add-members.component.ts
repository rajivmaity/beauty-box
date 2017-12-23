import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Members } from '../../../models/Members';
import { MembersService } from '../../../services/members.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {

  member: Members = {
    id: 0,
    name: '',
    userName: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: ''
    },
    phone: '',
    website: '',
    company: {
      name: ''
    }
  };

  constructor(
    private title: Title,
    private membersService: MembersService,
    private flashMessagesService: FlashMessagesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.title.setTitle('Add new member');
  }

  onSubmit({value, valid}: {value: Members, valid: boolean}) {
    if (!valid) {
      this.flashMessagesService.show('Please fill the required fields', {
        cssClass: 'alert-danger',
        timeout: '4000'
      });
    } else {
      this.membersService.addMember(value);
      if (this.membersService.addMember(value)) {
        this.flashMessagesService.show('Data saved', {
          cssClass: 'alert-success',
          timeout: '4000'
        });
        this.location.back();
      } else {
        this.flashMessagesService.show('Invalid data', {
          cssClass: 'alert-danger',
          timeout: '4000'
        });
      }
    }
  }

}
