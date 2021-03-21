import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private userServices:UserService,private router:Router) { }

  user={
    username:'',
    password:''
    }

    user1={
      email1:'',
      name1:'',
    password1:'',
    password2:''
    }

  ngOnInit(): void {
  }

  loginUser(){

    this.userServices.loginUser(this.user)
  .subscribe(
    res=>{
    
      if(res.tokenUser){
        localStorage.setItem('tokenUser',res.tokenUser)
        localStorage.setItem('userId',this.user.username)
        alert("success");
        this.router.navigate(['/'])
        }
      if(res.msg)
      {
        alert("Wrong:Try Again!!");
        this.user.username='';
        this.user.password='';
      }
    }
  )

  }


  signupUser()
  {
    this.userServices.signupUser(this.user1)
    .subscribe(
      res=>{
        if(res.msg1){
          alert("success");
          this.router.navigate(['/login-user'])
        }
        if(res.msg2)
        {
          alert("Wrong:Try Again!!");
          this.user1.email1='';
          this.user1.name1='';
          this.user1.password1='';
          this.user1.password2='';
        }
  
      }
    )
  }


}
