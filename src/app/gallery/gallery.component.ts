import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

const DESKTOP_IMAGE_WIDTH = 202;
const MOBILE_IMAGE_WIDTH = 162;

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public mockupDataURLs: string[];
  public visibleImageCount: number;
  public imageMaxWidth!: number;

  constructor() {
    const mockup = [];

    for (let i = 0; i < 10; i++) {
      mockup.push(
        'https://s3-alpha-sig.figma.com/img/f4a3/209c/d42faa09b04913c6fe3c9a3823072012?Expires=1650240000&Signature=fy0uZcfNWbct6KzcncEDuVD8dDqjZeAyX~TCzlO9vc2RbYwB3mFgI6ECyeQGG46zr13ffHU19hp4BVXCjE5CPO8QOnuI22fCOCDRVW8EJV48NojmwnFuH-J2ji4O3hZgc6jni6Vcy6PsNV701jS5QKUFAbGfna2LfeRfOa2QcIa2kL6OMyNV5554WxKyVcPjeBBjYfEhQs2EM5Jjz1yAg0bUGI1GxG2BO~sWVQepMjHS9hr3unjimUUGVuLjmdArXJ9RU93EpxCPOuEuLEorqJEWPpI9cSJ329pF7tLqq7dGc5D0Vzg3ghHbEGgvtQpnwlUn~J0J2cP0xLASeyr4AQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
      );
    }

    this.mockupDataURLs = mockup;
    this.visibleImageCount = 0;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const windowWidth = this.myIdentifier.nativeElement.offsetWidth;
    let imagesCount = this.mockupDataURLs.length;

    let deviceWidth;
    let devicePadding;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      deviceWidth = MOBILE_IMAGE_WIDTH;
      devicePadding = 5;
    } else {
      // false for not mobile device
      deviceWidth = DESKTOP_IMAGE_WIDTH;
      devicePadding = 10;
    }

    while (windowWidth / imagesCount < deviceWidth + devicePadding) {
      imagesCount -= 1;
    }

    if (windowWidth > imagesCount * deviceWidth) {
      this.imageMaxWidth = deviceWidth;
    } else {
      this.imageMaxWidth = windowWidth / imagesCount - devicePadding;
    }
    this.visibleImageCount = imagesCount;
  }

  @ViewChild('myIdentifier')
  myIdentifier!: ElementRef;
}
