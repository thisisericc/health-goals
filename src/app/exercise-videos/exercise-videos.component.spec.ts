import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseVideosComponent } from './exercise-videos.component';

describe('ExerciseVideosComponent', () => {
  let component: ExerciseVideosComponent;
  let fixture: ComponentFixture<ExerciseVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
