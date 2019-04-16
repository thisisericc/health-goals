import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhForumsDetailsComponent } from './mh-forums-details.component';

describe('MhForumsDetailsComponent', () => {
  let component: MhForumsDetailsComponent;
  let fixture: ComponentFixture<MhForumsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhForumsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhForumsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
