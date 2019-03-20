import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTherapistComponent } from './find-therapist.component';

describe('FindTherapistComponent', () => {
  let component: FindTherapistComponent;
  let fixture: ComponentFixture<FindTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
