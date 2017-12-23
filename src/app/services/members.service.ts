import { Injectable } from '@angular/core';
import { Members } from '../models/Members';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MembersService {

  constructor(
    public http: Http
  ) { }

  fetchMembers() {
    return this.http.get('//jsonplaceholder.typicode.com/users')
      .map(res => res.json());
  }

  fetchMember(id) {
    return this.http.get('//jsonplaceholder.typicode.com/users/' + id)
      .map(res => res.json());
  }

  addMember(memberData: Members) {
    return true;
  }

}
