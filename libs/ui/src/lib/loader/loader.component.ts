import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'org-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() name: string = 'spinner';
  constructor() {}

  ngOnInit(): void {}
}
