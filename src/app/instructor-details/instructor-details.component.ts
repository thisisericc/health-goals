import { Component, OnInit } from '@angular/core';
import {FindInstructorsService, FindInstructors} from '../find-instructors.service';
import {FitnessInstructorsComponent} from '../fitness-instructors/fitness-instructors.component'
import{ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {

  instructors_:FindInstructors[];
  instructor_d:FindInstructors[];
  name:string;
  address:string;
  zip:string;
  about:string;
  phone:string;
  tags:string;
  cert:string;
  rates:string;
  image:string;
  selectedTag:string;
  selectedCert:string;

  constructor(
    public instructorService:FindInstructorsService,
    private priv_ins:FindInstructorsService,
    private _location:Location,
    private route:ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap)=>{
      this.name=paramMap.get('Name');
      console.log(this.name)

      priv_ins.findInstructor(this.name).subscribe(
        data=>{
          this.instructor_d=data;
          console.log(data);
          debugger;
        },
        (error:HttpResponse<any>)=>{
          if(error.status==404){
            alert('Instructor not found :(');
          } else {
            console.error(error.status+'-'+error.body);
            alert('An error ocurred on the server. Check the console')
          }
        }
      )
      
    });
  }


  backClicked(){
    this._location.back();
  }

  ngOnInit() {

  }

  getInstructors(){
    this.instructorService.getInstructor().subscribe(
      data=>{
        this.instructors_=data;
        
        //console.log(this.instructors[0].Image_URL);
        /*for(var i=0;i<this.instructors_.length; i++){
      //this.instructors_[i].uri_name=encodeURI(this.instructors_[i].Name);
    }*/
        debugger;
      },
      error=>{
        alert('Could not retrieve a list of instructors');
      }
    )
    
    
    debugger;
  }

}
