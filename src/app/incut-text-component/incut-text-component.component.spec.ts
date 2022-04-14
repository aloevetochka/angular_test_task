import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncutTextComponentComponent } from './incut-text-component.component';

describe('IncutTextComponentComponent', () => {
  let component: IncutTextComponentComponent;
  let fixture: ComponentFixture<IncutTextComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncutTextComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncutTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
