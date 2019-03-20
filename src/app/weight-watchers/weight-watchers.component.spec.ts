import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightWatchersComponent } from './weight-watchers.component';

describe('WeightWatchersComponent', () => {
  let component: WeightWatchersComponent;
  let fixture: ComponentFixture<WeightWatchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightWatchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightWatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
