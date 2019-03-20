import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBlogsComponent } from './food-blogs.component';

describe('FoodBlogsComponent', () => {
  let component: FoodBlogsComponent;
  let fixture: ComponentFixture<FoodBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
