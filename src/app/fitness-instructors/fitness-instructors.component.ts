import { Component, OnInit } from '@angular/core';
import { FindInstructorsService, FindInstructors } from '../find-instructors.service';

@Component({
  selector: 'app-fitness-instructors',
  templateUrl: './fitness-instructors.component.html',
  styleUrls: ['./fitness-instructors.component.css'],
  providers: [ FindInstructorsService ]
})
export class FitnessInstructorsComponent implements OnInit {

  Instructors: FindInstructors[];
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
    this.InstructorService.getInstructor().subscribe(
      data=>{
        this.Instructors=data;
      },
      error=>{
        alert('Could not retrieve a list of instructors');
      }
    )
  }

  getPhone(phone:string){
    this.InstructorService.getPhone(phone).subscribe(
      data=>{
        this.Instructors=data;
      }, error=>{
        alert('Could not retrieve phones');
      }
    )
  }

  getAddress(address:string){
    this.InstructorService.getAddress(address).subscribe(
      data=>{
        this.Instructors=data;
      }, error=>{
        alert('Could not retrieve address');
      }
    )
  }

  getZip(zip:string){
    this.InstructorService.getZip(zip).subscribe(
      data=>{
        this.Instructors=data;
      }, error=>{
        alert('Could not retrieve zip code');
      }
    )
  }

  getImage(image:string){
    this.InstructorService.getImage(image).subscribe(
      data=>{
        this.Instructors=data;
      }, error=>{
        alert('Could not retrieve images');
      }
    )
  }

  getTags(tags:string){
    this.InstructorService.getTags(tags).subscribe(
      data=>{
        this.Instructors=data;
      }, error=>{
        alert('Could not retrieve tags');
      }
    )
  }

  getRates(rates:string){
    this.InstructorService.getRates(rates).subscribe(
      data=>{
        this.Instructors=data;
      }, error=>{
        alert('Could not retrieve rates');
      }
    )
  }

  getAbout(about:string){
    this.InstructorService.getAbout(about).subscribe(
      data=>{
        this.Instructors=data;
      }, error=>{
        alert('Could not retrieve about');
      }
    )
  }

  getCertification(certifications:string){
    this.InstructorService.getCertifications(certifications).subscribe(
      data=>{
        this.Instructors=data;
      }, error=>{
        alert('Could not retrieve certification');
      }
    )

  }

}
