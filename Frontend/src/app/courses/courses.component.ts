import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModel } from '../add-course/course.model'
import { EnrollModel } from '../course-details/enroll.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  enrollItem:EnrollModel[];
  courses: CourseModel[];

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    let userIdC=localStorage.getItem("userId");
    this.userService.getEnrolledCourses(userIdC).subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data));
      console.log(this.courses);
      console.log(this.courses[0]);
    })

  }

  detailsCoursetaken(course)
  {
    localStorage.setItem("detailsCourseId",course._id.toString());
      this.router.navigate(['details-coursetaken']); 
  }

}
