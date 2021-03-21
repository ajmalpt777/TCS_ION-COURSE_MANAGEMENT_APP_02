import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollModel } from '../course-details/enroll.model'
import { ProfService } from '../prof.service';
import { MessageModel } from './message.model';


@Component({
  selector: 'app-coursetaken-requests',
  templateUrl: './coursetaken-requests.component.html',
  styleUrls: ['./coursetaken-requests.component.css']
})
export class CoursetakenRequestsComponent implements OnInit {

  messageItem = new MessageModel('','','','','');
  requestItem = new EnrollModel('','','','','','','','');
  requestItem1:EnrollModel[];
  requestItem2:EnrollModel[];


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
    this.profService.acceptRequest(item).subscribe(res=>{
      console.log(this.requestItem1);
    if(res.lessthan)
    {
    this.requestItem.c_id=localStorage.getItem("detailsCourseId");
    this.requestItem.p_email=localStorage.getItem("profId");
    this.profService.getRequestDetails(this.requestItem)
    .subscribe((data)=>
    { 
      this.requestItem1  =JSON.parse(JSON.stringify(data));
      console.log(this.requestItem1);
    })

    }

    if(res.greater){
      alert("More Than 40");
    }

    })

    window.location.reload();

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

  sendMessage(item){
    
    let foo = prompt('Type Message');
    console.log(foo);
    if(foo===null){
      return;
    }
    if(foo?.trim()!=='' || foo?.trim()!==null)
    {
    this.messageItem.about=item.c_name;
    this.messageItem.r_id=item.s_email;
    this.messageItem.s_name=item.c_professor;
    this.messageItem.s_id=item.p_email;
    this.messageItem.message=foo;
    console.log(this.messageItem);
    this.profService.sendMessage(this.messageItem);
  }

  }

}
