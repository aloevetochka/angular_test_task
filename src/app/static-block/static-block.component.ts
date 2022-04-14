import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'static-block',
  templateUrl: './static-block.component.html',
  styleUrls: ['./static-block.component.scss'],
})
export class StaticBlockComponent implements OnInit {
  @Input()
  title?: string;
  @Input()
  text!: string;

  constructor() {}

  ngOnInit(): void {}
}
