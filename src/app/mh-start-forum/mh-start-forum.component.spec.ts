import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhStartForumComponent } from './mh-start-forum.component';

describe('MhStartForumComponent', () => {
  let component: MhStartForumComponent;
  let fixture: ComponentFixture<MhStartForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhStartForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhStartForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
