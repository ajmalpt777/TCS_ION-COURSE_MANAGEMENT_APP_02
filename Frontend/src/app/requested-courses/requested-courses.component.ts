import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModel } from '../add-course/course.model'
import { UserService } from '../user.service';


@Component({
  selector: 'app-requested-courses',
  templateUrl: './requested-courses.component.html',
  styleUrls: ['./requested-courses.component.css']
})
export class RequestedCoursesComponent implements OnInit {

  courses: CourseModel[];

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {

    let userIdC=localStorage.getItem("userId");
    this.userService.getRequestedCourses(userIdC).subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data));
      console.log(this.courses);
    })

}

detailsCourse(course)
  {
    localStorage.setItem("detailsCourseId",course._id.toString());
      this.router.navigate(['details-course']); 
  }

}
