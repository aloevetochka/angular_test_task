import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'num-list-component',
  templateUrl: './num-list-component.component.html',
  styleUrls: ['./num-list-component.component.scss'],
})
export class NumListComponentComponent implements OnInit {
  @Input()
  number!: string;

  @Input()
  numListContent!: string;

  constructor() {}

  ngOnInit(): void {}
}
