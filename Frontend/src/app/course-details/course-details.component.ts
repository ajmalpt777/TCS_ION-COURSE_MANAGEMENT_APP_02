import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CourseModel } from '../add-course/course.model';
import { EnrollModel } from './enroll.model';
import { ProfileModel } from '../profile-user/profile.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseItem:CourseModel[];
  enrollItem = new EnrollModel('','','','','','','','');
  enrollItem1 = new EnrollModel('','','','','','','','');

  // profileItem = new ProfileModel('','','','','','','','','','');
  profileItem : ProfileModel[];
  enrollRequest;

  constructor(private userService:UserService,public auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    let courseId=localStorage.getItem("detailsCourseId");
    this.userService.getCourseDetails(courseId)
    .subscribe((data)=>
    { 
      this.courseItem  =JSON.parse(JSON.stringify(data));
      console.log("one");
      console.log(this.courseItem);
    })

    let userId=localStorage.getItem("userId");
    this.userService.getUserProfile(userId)
    .subscribe((data)=>
    {
      this.profileItem = JSON.parse(JSON.stringify(data));
      console.log("two");
      console.log(this.profileItem);


      this.enrollItem.c_name=this.courseItem[0].name;
      this.enrollItem.p_email=this.courseItem[0].email;
      this.enrollItem.s_name=this.profileItem[0].name;
      this.enrollItem.s_email=this.profileItem[0].email;

      console.log(this.enrollItem);
      this.userService.enrollStatus(this.enrollItem)
      .subscribe((data)=>
      {
        this.enrollItem = JSON.parse(JSON.stringify(data));
        this.enrollRequest=this.enrollItem[0].status;
        console.log(this.enrollItem[0].status);
        console.log(this.enrollRequest);
        
      }) 
      
    })
    
      
   

  }

  enroll(course){
    
    console.log("enroll");
    
    this.enrollItem1.c_name=course.name;
    this.enrollItem1.c_professor=course.professor;
    this.enrollItem1.p_email=course.email;
    this.enrollItem1.c_id=course._id;
    this.enrollItem1.status="requested";
    this.enrollItem1.s_name=this.profileItem[0].name;
    this.enrollItem1.s_email=this.profileItem[0].email;
    this.enrollItem1.s_education=this.profileItem[0].education;
  
    console.log(this.enrollItem1);
    this.userService.enrollCourse(this.enrollItem1)
    .subscribe((data)=>
    {
      console.log("yes")
      this.enrollItem1 = JSON.parse(JSON.stringify(data));
      this.router.navigate(['/details-course'])
      console.log(this.enrollItem1)
    })
    window.location.reload();
  }

  cancel(course){
    
    console.log("cancel");
    
  }

}
