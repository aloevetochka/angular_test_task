import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'incut-text-component',
  templateUrl: './incut-text-component.component.html',
  styleUrls: ['./incut-text-component.component.scss'],
})
export class IncutTextComponentComponent implements OnInit {
  @Input()
  incutText!: string;
  constructor() {}

  ngOnInit(): void {}
}
