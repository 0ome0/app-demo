import { Component, OnInit } from '@angular/core';

import { Observable} from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './../api.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  films: Observable<any>;
  emp: any;

  constructor(public apiService: ApiService) {
    this.films = this.apiService.getFilms();

    // this.films
    // .subscribe(data => {
    //   console.log('my data: ', data);
    // });

    // this.emp = this.apiService.postData();

  }

  ngOnInit() {
  }

}
