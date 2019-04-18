import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseVideosDetailsComponent } from './exercise-videos-details.component';

describe('ExerciseVideosDetailsComponent', () => {
  let component: ExerciseVideosDetailsComponent;
  let fixture: ComponentFixture<ExerciseVideosDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseVideosDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseVideosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
