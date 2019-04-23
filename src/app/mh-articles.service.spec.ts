import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhArticlesComponent } from './mh-articles.component';

describe('MhArticlesComponent', () => {
  let component: MhArticlesComponent;
  let fixture: ComponentFixture<MhArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});