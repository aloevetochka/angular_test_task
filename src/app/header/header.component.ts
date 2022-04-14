import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private scroller: ViewportScroller) {}

  scroll(el: string) {
    this.scroller.scrollToAnchor(el);
  }

  ngOnInit(): void {}
}
