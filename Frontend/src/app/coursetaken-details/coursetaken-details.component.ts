import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProfService } from '../prof.service';

@Component({
  selector: 'app-coursetaken-details',
  templateUrl: './coursetaken-details.component.html',
  styleUrls: ['./coursetaken-details.component.css']
})
export class CoursetakenDetailsComponent implements OnInit {



  constructor(private profService:ProfService,private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
  }

  getRequest(){
    this.router.navigate(['request-coursetaken']);

  }

  createNotification(){
    this.router.navigate(['course-notification']);
  }

}
