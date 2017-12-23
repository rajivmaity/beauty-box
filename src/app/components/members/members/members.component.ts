import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MembersService } from '../../../services/members.service';
import { Members } from '../../../models/Members';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Members[];

  constructor(
    private membersService: MembersService,
    private title: Title
  ) {
  }

  ngOnInit() {
    this.membersService.fetchMembers().subscribe(membersJson => {
      this.members = membersJson;
    });
    this.title.setTitle('Members');
  }
}