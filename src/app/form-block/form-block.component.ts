import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss'],
})
export class FormBlockComponent implements OnInit {
  exform!: FormGroup;

  ngOnInit() {
    this.exform = new FormGroup({
      // name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'
        ),
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  clicksub() {
    console.log(this.exform.value);
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
  // name: string = '';
  // phone: string = '';
  // email: string = '';
  // text: string = '';
  value: boolean = false;

  // phoneMask = [
  //   '(',
  //   /[1-9]/,
  //   /\d/,
  //   /\d/,
  //   ')',
  //   ' ',
  //   /\d/,
  //   /\d/,
  //   /\d/,
  //   '-',
  //   /\d/,
  //   /\d/,
  //   '-',
  //   /\d/,
  //   /\d/,
  // ];

  // constructor() {}

  checkboxChange() {
    this.value = !this.value;
  }

  // validateEmail(email: string) {
  //   const emailRegexp =
  //     /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  //   return emailRegexp.test(email);
  // }

  // ngOnInit(): void {}
}
