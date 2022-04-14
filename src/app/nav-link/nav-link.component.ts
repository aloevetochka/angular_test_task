import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
})
export class NavLinkComponent implements OnInit {
  @Input()
  value!: string;
  constructor() {}

  ngOnInit(): void {}
}
