import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfService } from '../prof.service';
import { CourseModel } from '../add-course/course.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  courseItem = new CourseModel('','','','','','','','','','');


  constructor(private router:Router,private profService:ProfService,private userService:UserService) { }

  ngOnInit(): void {

    let courseId=localStorage.getItem("editCourseId");
    this.profService.getCourseDetails(courseId)
    .subscribe((data)=>
    { 
      this.courseItem=JSON.parse(JSON.stringify(data));
      console.log(this.courseItem);
      console.log("get");

    })

  }

  EditCourse()
  {
    this.profService.editCourse(this.courseItem);
    alert("success");
    this.router.navigate(['/course-taken']);
  }

}
