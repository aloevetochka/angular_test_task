import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'li-component',
  templateUrl: './li-component.component.html',
  styleUrls: ['./li-component.component.scss'],
})
export class LiComponentComponent implements OnInit {
  @Input()
  liContent!: string;

  constructor() {}

  ngOnInit(): void {}
}
