import { Component, Input, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'copy-form',
  templateUrl: './copy-form.component.html',
  styleUrls: ['./copy-form.component.scss'],
})
export class CopyFormComponent implements OnInit {
  @Input()
  link!: string;
  @Input()
  id!: string;

  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {}

  copyText(link: string) {
    this.clipboard.copy(link);
  }

  openMessage(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  ngOnInit(): void {}
}
