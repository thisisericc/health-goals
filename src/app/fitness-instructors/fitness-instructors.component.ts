import { Component, OnInit } from '@angular/core';
import { FindInstructorsService, FindInstructors } from '../find-instructors.service';
import { KeyFilterModule } from 'primeng/primeng';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-fitness-instructors',
  templateUrl: './fitness-instructors.component.html',
  styleUrls: ['./fitness-instructors.component.css'],
})
export class FitnessInstructorsComponent implements OnInit {

  instructors_: FindInstructors[];
  name:string;
  phone:string;
  address:string;
  zip:string;
  image:string;
  about:string;
  tags:string;
  rates:string;
  certifications:string;
  selectedTag:string;
  selectedCertification:string;
  activeAgingvalue:boolean;
  correctiveExercise:boolean;
  diseaseConsiderationvalue:boolean;
  orthopedicConditionsvalue:boolean;
  prepostNatalvalue:boolean;
  groupFitnessvalue:boolean;
  dancebasedProgramsvalue:boolean;
  functionalTrainingvalue:boolean;
  groupStrengthvalue:boolean;
  walkingProgramsvalue:boolean;
  lifestyleMedicinevalue:boolean;
  pilatesMattrainingvalue:boolean;
  yogavalue:boolean;
  nutritionvalue:boolean;
  weightLossweightManagementvalue:boolean;
  overweightAndobesityvalue:boolean;
  ACEvalue:boolean;
  Personalvalue:boolean;
  groupvalue:boolean;


  constructor(
    public InstructorService:FindInstructorsService
  ) { 
    this.InstructorService.getName(this.name).subscribe(
      data=>{
        console.log(data)
      }
    )
    this.InstructorService.getPhone(this.phone).subscribe(
      data=>{
        console.log(data)
      }
    )
    this.InstructorService.getAddress(this.address).subscribe(
      data=>{
        console.log(data)
      }
    )
    this.InstructorService.getZip(this.zip).subscribe(
      data=>{
        console.log(data)
      }
    )
    this.InstructorService.getImage(this.image).subscribe(
      data=>{
        console.log(data)
      }
    )
    this.InstructorService.getRates(this.rates).subscribe(
      data=>{
        console.log(data)
      }
    )
    this.InstructorService.getAbout(this.rates).subscribe(
      data=>{
        console.log(data)
      }
    )
    this.InstructorService.getTags(this.tags).subscribe(
      data=>{
        console.log(data)
      }
    )
    
   }

  ngOnInit() {
    this.name=undefined;
    this.phone=undefined;
    this.address=undefined;
    this.zip=undefined;
    this.getInstructors();
  }

  getInstructors(){
    this.setAllFalse();
    this.InstructorService.getInstructor().subscribe(
      data=>{
        this.instructors_=data;
        console.log(this.instructors_[0].Image_URL);
        /*for(var i=0;i<this.instructors_.length; i++){
          debugger;
      //this.instructors_[i].uri_name=encodeURI(this.instructors_[i].Name);
    }*/
      //this.getByTags('Active Aging');
      //this.getByTags('Corrective Exercise');
      },
      error=>{
        alert('Could not retrieve a list of instructors');
      }
    )
    
    
    // debugger;
  }

  getByTags(event){

    if(this.activeAgingvalue){
      this.tags='Active Aging';
      console.log(this.tags);
      this.helper(this.tags);
      //this.activeAgingvalue=false;
    } 
    if(this.correctiveExercise){
      this.tags='Corrective Exercise';
      this.helper(this.tags);
      //this.correctiveExercise=false;
    }
    if(this.diseaseConsiderationvalue){
      this.tags='Disease Considerations';
      this.helper(this.tags);
    }
    if(this.orthopedicConditionsvalue){
      this.tags='Orthopedic Conditions';
      this.helper(this.tags);
    }
    if(this.prepostNatalvalue){
      this.tags='Pre-Post Natal';
      this.helper(this.tags);
    }
    if(this.groupFitnessvalue){
      this.tags='Group Fitness';
      this.helper(this.tags);
    }
    if(this.dancebasedProgramsvalue){
      this.tags='Dance-based Programs';
      this.helper(this.tags);
    }
    if(this.functionalTrainingvalue){
      this.tags='Functional Training';
      this.helper(this.tags);
    }
    if(this.groupStrengthvalue){
      this.tags='Group Strength';
      this.helper(this.tags);
    }
    if(this.walkingProgramsvalue){
      this.tags='Walking Programs';
      this.helper(this.tags);
    }
    if(this.lifestyleMedicinevalue){
      this.tags='Lifestyle Medicine';
      this.helper(this.tags);
    }
    if(this.yogavalue){
      this.tags='Yoga';
      this.helper(this.tags);
    }
    if(this.nutritionvalue){
      this.tags='Nutrition';
      this.helper(this.tags);
    }
    if(this.weightLossweightManagementvalue){
      this.tags='Weight Loss/Weight Management';
      this.helper(this.tags);
    }
    if(this.overweightAndobesityvalue){
      this.tags='Overweight and Obesity';
      this.helper(this.tags);
    }

    
  }

  getByCert(event){
    if(this.ACEvalue){
      this.certifications="ACE Health Coach";
      console.log(this.certifications);
      this.helperC(this.certifications);
    }
    if(this.Personalvalue){
      this.certifications='Personal Trainer';
      this.helperC(this.certifications);
    }
    if(this.groupvalue){
      this.certifications="Group Fitness Instructor";
      this.helperC(this.certifications);
    }
  }

  helper(tags:string){
    for(var i=0; i<this.instructors_.length; i++){
      if(-1==this.instructors_[i].Tags.indexOf(this.tags)){
        this.instructors_.splice(i,1);
        i--;
      }

      if(this.instructors_.length==0){
        console.warn('No instructors found by these tags try again');
      }
    }
  }

  helperC(cert:string){
    for(var i=0; i<this.instructors_.length; i++){
      if(-1==this.instructors_[i].Certification.indexOf(cert)){
        this.instructors_.splice(i,1);
        i--;
      }

      if(this.instructors_.length==0){
        console.warn('No instructors found by these Certifications try again');
      }
    }
  }

  resetFilters(){
    if(this.instructors_.length<1){
      this.getInstructors();
    } else{
      this.instructors_.length=0;
      this.getInstructors();
      console.log('Filters have been cleared')
    }
  }

  setAllFalse(){
    this.activeAgingvalue=false;
    this.correctiveExercise=false;
    this.diseaseConsiderationvalue=false;
    this.orthopedicConditionsvalue=false;
    this.prepostNatalvalue=false;
    this.groupFitnessvalue=false;
    this.dancebasedProgramsvalue=false;
    this.functionalTrainingvalue=false;
    this.groupStrengthvalue=false;
    this.walkingProgramsvalue=false;
    this.lifestyleMedicinevalue=false;
    this.pilatesMattrainingvalue=false;
    this.yogavalue=false;
    this.nutritionvalue=false;
    this.weightLossweightManagementvalue=false;
    this.overweightAndobesityvalue=false;
    this.ACEvalue=false;
    this.Personalvalue=false;
    this.groupvalue=false;
  }

  /*getPhone(phone:string){
    this.InstructorService.getPhone(phone).subscribe(
      data=>{
        this.instructors_=data;
      }, error=>{
        alert('Could not retrieve phones');
      }
    )
  }

  getAddress(address:string){
    this.InstructorService.getAddress(address).subscribe(
      data=>{
        this.instructors_=data;
      }, error=>{
        alert('Could not retrieve address');
      }
    )
  }

  getZip(zip:string){
    this.InstructorService.getZip(zip).subscribe(
      data=>{
        this.instructors_=data;
      }, error=>{
        alert('Could not retrieve zip code');
      }
    )
  }

  getImage(image:string){
    this.InstructorService.getImage(image).subscribe(
      data=>{
        this.instructors_=data;
      }, error=>{
        alert('Could not retrieve images');
      }
    )
  }

  getTags(tags:string){
    this.InstructorService.getTags(tags).subscribe(
      data=>{
        this.instructors_=data;
      }, error=>{
        alert('Could not retrieve tags');
      }
    )
  }

  getRates(rates:string){
    this.InstructorService.getRates(rates).subscribe(
      data=>{
        this.instructors_=data;
      }, error=>{
        alert('Could not retrieve rates');
      }
    )
  }

  getAbout(about:string){
    this.InstructorService.getAbout(about).subscribe(
      data=>{
        this.instructors_=data;
      }, error=>{
        alert('Could not retrieve about');
      }
    )
  }

  getCertification(certifications:string){
    this.InstructorService.getCertifications(certifications).subscribe(
      data=>{
        this.instructors_=data;
      }, error=>{
        alert('Could not retrieve certification');
      }
    )

  }*/

}
