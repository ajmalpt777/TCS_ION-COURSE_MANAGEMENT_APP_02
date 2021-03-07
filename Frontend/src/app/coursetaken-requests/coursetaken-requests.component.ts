import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollModel } from '../course-details/enroll.model'
import { ProfService } from '../prof.service';


@Component({
  selector: 'app-coursetaken-requests',
  templateUrl: './coursetaken-requests.component.html',
  styleUrls: ['./coursetaken-requests.component.css']
})
export class CoursetakenRequestsComponent implements OnInit {

  requestItem = new EnrollModel('','','','','','','','');
  requestItem1:EnrollModel[];


  constructor(private profService:ProfService,private router:Router) { }

  ngOnInit(): void {

    this.requestItem.c_id=localStorage.getItem("detailsCourseId");
    this.requestItem.p_email=localStorage.getItem("profId");
    this.profService.getRequestDetails(this.requestItem)
    .subscribe((data)=>
    { 
      this.requestItem1  =JSON.parse(JSON.stringify(data));
      console.log(this.requestItem1);
    })
    
  }

  acceptRequest(item){
    this.profService.acceptRequest(item._id).subscribe((data)=>{
      console.log(this.requestItem1);

    this.requestItem.c_id=localStorage.getItem("detailsCourseId");
    this.requestItem.p_email=localStorage.getItem("profId");
    this.profService.getRequestDetails(this.requestItem)
    .subscribe((data)=>
    { 
      this.requestItem1  =JSON.parse(JSON.stringify(data));
      console.log(this.requestItem1);
    })

    })

  }

  declineRequest(item){
    this.profService.declineRequest(item._id).subscribe((data)=>{
      console.log(data);

    this.requestItem.c_id=localStorage.getItem("detailsCourseId");
    this.requestItem.p_email=localStorage.getItem("profId");
    this.profService.getRequestDetails(this.requestItem)
    .subscribe((data)=>
    { 
      this.requestItem1  =JSON.parse(JSON.stringify(data));
      console.log(this.requestItem1);
    })

    })

    
  }

}
