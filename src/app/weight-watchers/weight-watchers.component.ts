import { Component, OnInit } from '@angular/core';
import { GroupInfo ,WeightWatchersService, GroupMemberInfo } from '../weight-watchers.service' ;


@Component({
  selector: 'app-weight-watchers',
  templateUrl: './weight-watchers.component.html',
  styleUrls: ['./weight-watchers.component.css']
})
export class WeightWatchersComponent implements OnInit {

  groups: GroupInfo[];
  input: string;
  selectedValues: string; 
  selectedCalories: string;
  members: GroupMemberInfo[];
  
  constructor(
    public weightwatchersService: WeightWatchersService
    
  ) { 
  }

  ngOnInit() {
    this.getGroupInfo();
  }
  
  getGroupInfo() {
    this.weightwatchersService.getGroupInfo().subscribe(
      data => {
        this.groups = data;
      },
    error => {
      alert('Cannot retrieve Data');
    }
    );
  }

  getMemberInfo(number: string){
    this.weightwatchersService.getMemberInfo(number).subscribe(
      data => {
        this.members = data;
      },
      error => {
        alert('Cannot retrieve Data');
      }
    )
  }  

  searchForGroups(name: string) {
    this.weightwatchersService.searchForGroups(name).subscribe(
      data => {
        this.groups = data;
      },
    error => {
      alert('Cannot retrieve Data');
    }
    );
  }

  filterexercise(exercise: string) {
    this.weightwatchersService.filterexercise(exercise).subscribe(
      data => {
        this.groups = data;
      },
    error => {
      alert('Cannot retrieve Data');
    }
    );
  }

  filtercalories(calories: string) {
    this.weightwatchersService.filtercalories(calories).subscribe(
      data => {
        this.groups = data;
      },
    error => {
      alert('Cannot retrieve Data');
    }
    );
  }




}
