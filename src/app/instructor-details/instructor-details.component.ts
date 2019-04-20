import { Component, OnInit } from '@angular/core';
import {FindInstructorsService, FindInstructors} from '../find-instructors.service';
import {FitnessInstructorsComponent} from '../fitness-instructors/fitness-instructors.component'
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
