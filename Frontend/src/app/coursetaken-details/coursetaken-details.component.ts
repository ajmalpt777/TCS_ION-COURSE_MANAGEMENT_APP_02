import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProfService } from '../prof.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CourseNotificationComponent } from '../course-notification/course-notification.component';
import { NotificationModel } from '../course-notification/notification.model'
import { CoursetakenRequestsComponent } from '../coursetaken-requests/coursetaken-requests.component';
import { CourseModel } from '../add-course/course.model';
import { UserService } from '../user.service';
import { EnrollModel } from '../course-details/enroll.model'




@Component({
  selector: 'app-coursetaken-details',
  templateUrl: './coursetaken-details.component.html',
  styleUrls: ['./coursetaken-details.component.css']
})
export class CoursetakenDetailsComponent implements OnInit {

  notificationItem = new NotificationModel('','','');
  notificationItems : NotificationModel[];
  courseItem:CourseModel[];
  requestItem2:EnrollModel[];
  strength;

  constructor(private profService:ProfService,private router:Router,public auth:AuthService,private dialog:MatDialog,private userService:UserService) { }

  ngOnInit(): void {
    let courseId=localStorage.getItem("detailsCourseId");
    this.userService.getCourseDetails(courseId)
    .subscribe((data)=>
    { 
      this.courseItem  =JSON.parse(JSON.stringify(data));
      console.log(this.courseItem);
    })

    let number_id=localStorage.getItem("detailsCourseId");
    this.profService.enrollNumber(number_id)
    .subscribe((data)=>{
      this.requestItem2  =JSON.parse(JSON.stringify(data));
      console.log(this.requestItem2);
      console.log(this.requestItem2.length);
      this.strength=this.requestItem2.length;
    })

  }

  getRequest(){
    // this.router.navigate(['request-coursetaken']);
    const dialogRef = this.dialog.open(CoursetakenRequestsComponent, {
      height: '450px',
      width:'500px'
    });

  }

  createNotification(){
    const dialogRef = this.dialog.open(CourseNotificationComponent, {
      height: '450px',
      width:'500px'
    });
  }

  addNotification()
  {
    let foo = prompt('Type Message');
    console.log(foo);
    if(foo===null){
      return;
    }
    if(foo?.trim()!=='' || foo?.trim()!==null)
    {
    let c_Id = localStorage.getItem("detailsCourseId");
    this.notificationItem.c_id=c_Id;
    this.notificationItem.message=foo;
    this.profService.addNotification(this.notificationItem);
    
    this.profService.getNotification(c_Id)
    .subscribe((data)=>{
      this.notificationItems=JSON.parse(JSON.stringify(data));
      console.log(this.notificationItems);
    })

  }
}

editCourse(course)
  {
    localStorage.setItem("editCourseId",course._id.toString());
    this.router.navigate(['edit-course']);
  }

}
