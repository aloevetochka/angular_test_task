import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiComponentComponent } from './li-component.component';

describe('LiComponentComponent', () => {
  let component: LiComponentComponent;
  let fixture: ComponentFixture<LiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
