import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumListComponentComponent } from './num-list-component.component';

describe('NumListComponentComponent', () => {
  let component: NumListComponentComponent;
  let fixture: ComponentFixture<NumListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
