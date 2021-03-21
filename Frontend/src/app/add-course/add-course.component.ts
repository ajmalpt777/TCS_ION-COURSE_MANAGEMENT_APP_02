import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfService } from '../prof.service';
import { CourseModel } from './course.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private profService:ProfService,private router:Router) { }

  courseItem = new CourseModel('','','','','','','','','','');


  ngOnInit(): void {
  this.courseItem.email = localStorage.getItem("profId");
  }

  AddCourse(){
    console.log(this.courseItem)
    this.profService.addCourse(this.courseItem);
    console.log("called");
    alert("success");
    this.router.navigate(['/course-taken']);
  }

}
