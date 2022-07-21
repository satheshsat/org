import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'org-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list = [{
    title: 'test',
    content: 'test',
  },
  {
    title: 'test',
    content: 'test',
  },
  {
    title: 'test',
    content: 'test',
  }];
  constructor() {}

  ngOnInit(): void {}
}
