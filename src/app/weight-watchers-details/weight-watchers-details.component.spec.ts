import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightWatchersDetailsComponent } from './weight-watchers-details.component';

describe('WeightWatchersDetailsComponent', () => {
  let component: WeightWatchersDetailsComponent;
  let fixture: ComponentFixture<WeightWatchersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightWatchersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightWatchersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
