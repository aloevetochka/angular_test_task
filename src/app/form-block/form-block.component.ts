import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss'],
})
export class FormBlockComponent implements OnInit {
  exform!: FormGroup;
  clicked: boolean;

  ngOnInit() {
    this.exform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/\(\d\d\d\) \d\d\d-\d\d-\d\d/gm),
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  clicksub() {
    console.log(this.exform.value);
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 5000);
    this.exform.reset();
  }
  get name() {
    return this.exform.get('name');
  }
  get email() {
    return this.exform.get('email');
  }
  get phone() {
    return this.exform.get('phone');
  }
  get message() {
    return this.exform.get('message');
  }

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

  constructor() {
    this.clicked = false;
  }

  checkboxChange() {
    this.value = !this.value;
  }
}
