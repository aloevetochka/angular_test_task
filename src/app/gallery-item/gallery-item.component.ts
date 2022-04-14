import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss'],
})
export class GalleryItemComponent implements OnInit {
  public showModal: boolean;

  @Input()
  photoURL!: string;

  @Input()
  lastPhoto!: boolean;

  @Input()
  leastCount!: number;

  @Input()
  maxWidth!: number;

  handleClick() {
    this.showModal = !this.showModal;
  }

  constructor() {
    this.showModal = false;
  }

  ngOnInit(): void {}
}
