import { Component, OnInit } from '@angular/core';
import { ApiTestService } from 'src/utils/api-test.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  posts;

  constructor(
    private apiService: ApiTestService
  ) { }

  ngOnInit() {
    this.posts = this.apiService.getPosts();
  }

}
