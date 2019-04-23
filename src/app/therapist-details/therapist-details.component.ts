import { Component, OnInit } from '@angular/core';
import {FindTherapistService} from '../find-therapist.service';
import {FindTherapist} from '../find-therapist';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';
import {MessageService} from 'primeng/api';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-therapist-details',
  templateUrl: './therapist-details.component.html',
  styleUrls: ['./therapist-details.component.css'],
  providers:[MessageService]
})
export class TherapistDetailsComponent implements OnInit {

  T:FindTherapist;
  fname: string;
  mname:string;
  lname:string;
  title:string;
  imageURL: string;
  gender: string;
  bio: string;
  doctorURL: string;
  number: string;
  address: string;
  state: string;
  zip: string;
  city: string;
  specialties:string;
  npi:string;
  s_description:string;
  therapistResults:any;
  loading:any;
  error=null;
  //private T:FindTherapist;
  private _url= 'https://api.betterdoctor.com/2016-03-01/doctors/npi/';
  private end='?user_key=2bd6df991f4d47275948ff4ece06e299';

  constructor(
    private route:ActivatedRoute,
    private http:HttpClient,
    private messageService:MessageService,
    private _location:Location,
  ) { 
    route.paramMap.subscribe((paraMap)=>{
      this.npi=paraMap.get('npi');
      /*this.Therapist(this.npi).subscribe(
        data=>{
          this.T=data;
          console.log(data);
        },
        (error:HttpResponse<any>)=>{
          if(error.status===404){
            alert('Therapist not found');
          }else{
            console.error(error.status+'-'+error.body);
            alert('An error ocurred on the server. Please check console.')
          }
        }
      )*/
    })
  }


  backClicked(){
    this._location.back();
  }

  ngOnInit() {

    this.Therapist(this.npi);
  }

 
  npiSearch(npi:string){
    const actual_url=this._url+npi+this.end;
    console.log(encodeURI(actual_url));
    return this.http.get(encodeURI(actual_url))
    .pipe(catchError(this.errorHandler));


  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(
      error.error
    );
  }

  formatPhoneNumber(phoneNumber:string) {
    var cleaned = ('' + phoneNumber).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
  }

  
  Therapist(npi:string){
    this.npiSearch(npi).subscribe(
      obj=>{
        const therapist=JSON.stringify(obj);
        const output:FindTherapist[]=[];
        const T={} as FindTherapist;
        T.fname=therapist.substring(therapist.indexOf('\"first_name\":')+14, therapist.indexOf('\"', therapist.indexOf('\"first_name\"')+14));
        T.mname=therapist.substring(therapist.indexOf('\"middle_name\":')+15, therapist.indexOf('\"', therapist.indexOf('\"middle_name\"')+15));
        T.lname=therapist.substring(therapist.indexOf('\"last_name\":')+13, therapist.indexOf('\"', therapist.indexOf('\"last_name\"')+13));
        T.title=therapist.substring(therapist.indexOf('\"title\":')+9, therapist.indexOf('\"', therapist.indexOf('\"title\"')+9));
        T.imageURL=therapist.substring(therapist.indexOf('\"image_url\":')+13, therapist.indexOf('\"', therapist.indexOf('\"image_url\"')+13));
        T.gender=therapist.substring(therapist.indexOf('\"gender\":')+10, therapist.indexOf('\"', therapist.indexOf('\"gender\"')+10));
        T.bio=therapist.substring(therapist.indexOf('\"bio\":')+7, therapist.indexOf('\"', therapist.indexOf('\"bio\"')+7));
        T.state=therapist.substring(therapist.indexOf('\"state_long\":')+14, therapist.indexOf('\"', therapist.indexOf('\"state_long\"')+14));
        T.address=therapist.substring(therapist.indexOf('\"street\":')+10, therapist.indexOf('\"', therapist.indexOf('\"street\"')+10));
        T.number=therapist.substring(therapist.indexOf('\"phones\"')+21, therapist.indexOf('\"', therapist.indexOf('\"phones\"')+21));
        T.zip=therapist.substring(therapist.indexOf('\"zip\"')+7, therapist.indexOf('\"', therapist.indexOf('\"zip\"')+7));
        T.city=therapist.substring(therapist.indexOf('\"city\"')+8, therapist.indexOf('\"', therapist.indexOf('\"city\"')+8));
        //T.npi=therapist.substring(therapist.indexOf('\"npi\"')+7,therapist.indexOf('\"',therapist.indexOf('\"npi\"')+7));
        therapist.substring(therapist.indexOf('\"specialties\":')+16, therapist.length-1).split('\"specialties\":').forEach(function(therapist){
          T.specialties=therapist.substring(therapist.indexOf('\"name\":')+8, therapist.indexOf('\"', therapist.indexOf('\"name\"')+8));
          T.s_description=therapist.substring(therapist.indexOf('\"description\":')+15, therapist.indexOf('\"', therapist.indexOf('\"description\"')+15));
        });
        output.push(T);
        
        this.therapistResults=output;
        this.fname=T.fname;
        this.mname=T.mname.replace('_type', '');
        this.lname=T.lname;
        this.number=this.formatPhoneNumber(T.number);
        this.address=T.address;
        this.zip=T.zip;
        this.city=T.city;
        this.bio=T.bio.replace(/(?:\\r\\n|\\r|\\n)/g, '<br>');
        this.gender=T.gender;
        this.specialties=T.specialties;
        this.title=T.title;
        this.imageURL=T.imageURL;
        this.s_description=T.s_description;
        this.specialties=T.specialties;


      },
      error=>{
        console.error(error);
        this.error=error;
        this.messageService.add({severity:'error', summary:this.error, life:5000, detail:'Search Failed'});
      }
    );
  }
}
