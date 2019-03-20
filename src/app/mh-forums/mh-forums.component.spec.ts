import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhForumsComponent } from './mh-forums.component';

describe('MhForumsComponent', () => {
  let component: MhForumsComponent;
  let fixture: ComponentFixture<MhForumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhForumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhForumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
