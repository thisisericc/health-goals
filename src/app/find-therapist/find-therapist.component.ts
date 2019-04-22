import { Component, OnInit } from '@angular/core';
import { FindTherapistService } from '../find-therapist.service';
import { FindTherapist } from '../find-therapist';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-find-therapist',
  templateUrl: './find-therapist.component.html',
  styleUrls: ['./find-therapist.component.css'],
  providers: [MessageService]
})
export class FindTherapistComponent implements OnInit {

  therapistResults: any;
  loading: any;
  error=null;

  constructor(
    public findTherapistService: FindTherapistService,
    private messageService: MessageService,
  ) { 
    this.findTherapistService.getonlyTherapists().subscribe(
      obj=>{
        console.log(obj)
      }
    )
    this.findTherapistService.getonlyPsychiatrist().subscribe(
      obj=>{
        console.log(obj)
      }
    )
    this.findTherapistService.getonlyPsychologists().subscribe(
      obj=>{
        console.log(obj)
      }
    )
    this.findTherapistService.getonlyCounselors().subscribe(
      obj=>{
        console.log(obj)
      }
    )
  }

  ngOnInit() {
    this.TherapistLocation();
  }

  TherapistLocation(){
    this.findTherapistService.getTherapist().subscribe(
      obj=>{
        const str=JSON.stringify(obj);
        const output: FindTherapist[]=[];
        str.substring(str.indexOf('\"profile\":')+12, str.length-1).split('\"profile\":').forEach(function(therapist){
          const T={} as FindTherapist;

          T.fname=therapist.substring(therapist.indexOf('\"first_name\":')+14, therapist.indexOf('\"', therapist.indexOf('\"first_name\"')+14));
          T.mname=therapist.substring(therapist.indexOf('\"middle_name\":')+15, therapist.indexOf('\"', therapist.indexOf('\"middle_name\"')+15)).replace('achael','');
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
          T.npi=therapist.substring(therapist.indexOf('\"npi\"')+7,therapist.indexOf('\"',therapist.indexOf('\"npi\"')+7));
          therapist.substring(therapist.indexOf('\"specialties\":')+16, therapist.length-1).split('\"specialties\":').forEach(function(therapist){
            T.specialties=therapist.substring(therapist.indexOf('\"name\":')+8, therapist.indexOf('\"', therapist.indexOf('\"name\"')+8));
            T.s_description=therapist.substring(therapist.indexOf('\"description\":')+15, therapist.indexOf('\"', therapist.indexOf('\"description\"')+15));
          });
          output.push(T);
        });
        this.therapistResults=output;
      },
      error=>{
        console.error(error);
        this.error=error;
        this.messageService.add({severity: 'error',summary:this.error, life:5000, detail: 'Search Failed'});
      });
  }

  getonlyTherapists(){
    this.findTherapistService.getonlyTherapists().subscribe(
      obj=>{
        const str=JSON.stringify(obj);
        const output: FindTherapist[]=[];
        str.substring(str.indexOf('\"profile\":')+12, str.length-1).split('\"profile\":').forEach(function(therapist){
          const T={} as FindTherapist;

          T.fname=therapist.substring(therapist.indexOf('\"first_name\":')+14, therapist.indexOf('\"', therapist.indexOf('\"first_name\"')+14));
          T.mname=therapist.substring(therapist.indexOf('\"middle_name\":')+15, therapist.indexOf('\"', therapist.indexOf('\"middle_name\"')+15)).replace('achael','');
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
          T.npi=therapist.substring(therapist.indexOf('\"npi\"')+7,therapist.indexOf('\"',therapist.indexOf('\"npi\"')+7));
          therapist.substring(therapist.indexOf('\"specialties\":')+16, therapist.length-1).split('\"specialties\":').forEach(function(therapist){
            T.specialties=therapist.substring(therapist.indexOf('\"name\":')+8, therapist.indexOf('\"', therapist.indexOf('\"name\"')+8));
            T.s_description=therapist.substring(therapist.indexOf('\"description\":')+15, therapist.indexOf('\"', therapist.indexOf('\"description\"')+15));
          });
          output.push(T);
        });
        this.therapistResults=output;
      },
      error=>{
        console.error(error);
        this.error=error;
        this.messageService.add({severity: 'error',summary:this.error, life:5000, detail: 'Search Failed'});
      });
  }

  getonlyPsychologists(){
    this.findTherapistService.getonlyPsychologists().subscribe(
      obj=>{
        const str=JSON.stringify(obj);
        const output: FindTherapist[]=[];
        str.substring(str.indexOf('\"profile\":')+12, str.length-1).split('\"profile\":').forEach(function(therapist){
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
          T.npi=therapist.substring(therapist.indexOf('\"npi\"')+7,therapist.indexOf('\"',therapist.indexOf('\"npi\"')+7));
          therapist.substring(therapist.indexOf('\"specialties\":')+16, therapist.length-1).split('\"specialties\":').forEach(function(therapist){
            T.specialties=therapist.substring(therapist.indexOf('\"name\":')+8, therapist.indexOf('\"', therapist.indexOf('\"name\"')+8));
            T.s_description=therapist.substring(therapist.indexOf('\"description\":')+15, therapist.indexOf('\"', therapist.indexOf('\"description\"')+15));
          });
          output.push(T);
        });
        this.therapistResults=output;
      },
      error=>{
        console.error(error);
        this.error=error;
        this.messageService.add({severity: 'error',summary:this.error, life:5000, detail: 'Search Failed'});
      });
  }

  getonlyCounselors(){
    this.findTherapistService.getonlyCounselors().subscribe(
      obj=>{
        const str=JSON.stringify(obj);
        const output: FindTherapist[]=[];
        str.substring(str.indexOf('\"profile\":')+12, str.length-1).split('\"profile\":').forEach(function(therapist){
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
          T.npi=therapist.substring(therapist.indexOf('\"npi\"')+7,therapist.indexOf('\"',therapist.indexOf('\"npi\"')+7));
          therapist.substring(therapist.indexOf('\"specialties\":')+16, therapist.length-1).split('\"specialties\":').forEach(function(therapist){
            T.specialties=therapist.substring(therapist.indexOf('\"name\":')+8, therapist.indexOf('\"', therapist.indexOf('\"name\"')+8));
            T.s_description=therapist.substring(therapist.indexOf('\"description\":')+15, therapist.indexOf('\"', therapist.indexOf('\"description\"')+15));
          });
          output.push(T);
        });
        this.therapistResults=output;
      },
      error=>{
        console.error(error);
        this.error=error;
        this.messageService.add({severity: 'error',summary:this.error, life:5000, detail: 'Search Failed'});
      });
  }

  getonlyPsychiatrists(){
    this.findTherapistService.getonlyPsychiatrist().subscribe(
      obj=>{
        const str=JSON.stringify(obj);
        const output: FindTherapist[]=[];
        debugger
        str.substring(str.indexOf('\"profile\":')+12, str.length-1).split('\"profile\":').forEach(function(therapist){
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
          T.npi=therapist.substring(therapist.indexOf('\"npi\"')+7,therapist.indexOf('\"',therapist.indexOf('\"npi\"')+7));
          therapist.substring(therapist.indexOf('\"specialties\":')+16, therapist.length-1).split('\"specialties\":').forEach(function(therapist){
            T.specialties=therapist.substring(therapist.indexOf('\"name\":')+8, therapist.indexOf('\"', therapist.indexOf('\"name\"')+8));
            T.s_description=therapist.substring(therapist.indexOf('\"description\":')+15, therapist.indexOf('\"', therapist.indexOf('\"description\"')+15));
          });
          output.push(T);
        });
        this.therapistResults=output;
      },
      error=>{
        console.error(error);
        this.error=error;
        this.messageService.add({severity: 'error',summary:this.error, life:5000, detail: 'Search Failed'});
      });
  }
}
