import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private scroller: ViewportScroller) {}

  scroll(el: string) {
    this.scroller.scrollToAnchor(el);
  }
  ngOnInit(): void {}
}
