import { Component, OnInit } from '@angular/core';
import { FindInstructorsService } from '../find-instructors.service';

@Component({
  selector: 'app-fitness-instructors',
  templateUrl: './fitness-instructors.component.html',
  styleUrls: ['./fitness-instructors.component.css'],
  providers: [ FindInstructorsService ]
})
export class FitnessInstructorsComponent implements OnInit {

  persons: Array<any>;
  dataId: string;

  constructor(fitness:FindInstructorsService) { 
    this.dataId='2PACX-1vTU_4-M5N_gBhiLtZ1wFuX9o0R77WJoG806nwjZ5Q31WOoSCLG5-DeYKD-ChkUyy4vdJLIapfgyyqk8';
    fitness.load(this.dataId)
      .then((data)=>{
        console.log(data);
        this.persons=data; 
      }, (error)=>{
        console.log(error);
      });
   }

  ngOnInit() {
  }

}
