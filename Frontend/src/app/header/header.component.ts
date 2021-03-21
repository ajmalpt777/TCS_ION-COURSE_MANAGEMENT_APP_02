import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MessageNotificationComponent } from '../message-notification/message-notification.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService,private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.removeItem('tokenUser')
    localStorage.removeItem('tokenProf')
    localStorage.removeItem('userId')
    localStorage.removeItem('profId')
    localStorage.removeItem('editProfileId')
    this.router.navigate(['/'])  
  }

  getMessage(){
    const dialogRef = this.dialog.open(MessageNotificationComponent, {
      height: '450px',
      width:'500px'
    });
  }

  

}
