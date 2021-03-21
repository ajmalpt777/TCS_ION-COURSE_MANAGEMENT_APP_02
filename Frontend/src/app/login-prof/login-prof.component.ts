import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfService } from '../prof.service';

@Component({
  selector: 'app-login-prof',
  templateUrl: './login-prof.component.html',
  styleUrls: ['./login-prof.component.css']
})
export class LoginProfComponent implements OnInit {

  constructor(private profService:ProfService,private router:Router) { }

  user={
    username:'',
    password:''
    }

    user1={
      email1:'',
      name1:'',
    password1:'',
    password2:'',
    code:''
    }

  ngOnInit(): void {
  }

  loginProf(){

    this.profService.loginProf(this.user)
  .subscribe(
    res=>{
    
      if(res.tokenProf){
        localStorage.setItem('tokenProf',res.tokenProf)
        localStorage.setItem('profId',this.user.username)
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

  signupProf()
  {
    this.profService.signupProf(this.user1)
    .subscribe(
      res=>{
        if(res.msg1){
          alert("success");
          this.router.navigate(['/login-prof'])
        }
        if(res.msg2)
        {
          alert("Wrong:Try Again!!");
          this.user1.email1='';
          this.user1.name1='';
          this.user1.password1='';
          this.user1.password2='';
          this.user1.code='';
        }
  
      }
    )
  }

}
