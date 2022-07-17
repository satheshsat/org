import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'org-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})

export class ListComponent implements OnInit {
  @Input() list: any;
  @Output() onItemClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(data: any){
    this.onItemClick.emit(data);
  }
}
