import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  users = [];
  list: any;
  emp: any;

  constructor(private httpClient: HttpClient) {
    this.loadUsers();
   }

  ngOnInit() {
  }

  loadUsers() {
    this.httpClient.get(`https://randomuser.me/api/?results=20`)
    .subscribe(res => {
      // tslint:disable-next-line:no-string-literal
      this.users = res['results'];
      console.log(this.users);
    });
  }

}
