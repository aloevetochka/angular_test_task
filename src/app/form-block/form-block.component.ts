import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss'],
})
export class FormBlockComponent implements OnInit {

  name: string = '';
  phone: string = '';
  email: string = '';
  text: string = '';
  value: boolean = false;

  phoneMask = [
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ];

  constructor() {}

  checkboxChange() {
    this.value = !this.value;
  }

  validateEmail(email: string) {
    const emailRegexp =
      /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return emailRegexp.test(email);
  }

  ngOnInit(): void {}
}
