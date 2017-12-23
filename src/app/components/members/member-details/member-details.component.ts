import { Component, OnInit } from '@angular/core';
import { Members } from '../../../models/Members';
import { Title } from '@angular/platform-browser';
import { MembersService } from '../../../services/members.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  id: number;
  member: Members;

  constructor(
    private membersService: MembersService,
    private route: ActivatedRoute,
    private title: Title
  ) {  }

  ngOnInit() {
    this.getMemberDetail();
  }

  getMemberDetail() {
    this.id = this.route.snapshot.params['id'];
    this.membersService.fetchMember(this.id).subscribe(member => {
      this.member = member;
      this.title.setTitle(this.member.name);
      console.log(this.member);
    });
  }

}
