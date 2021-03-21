import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MessageModel } from '../coursetaken-requests/message.model';


@Component({
  selector: 'app-message-notification',
  templateUrl: './message-notification.component.html',
  styleUrls: ['./message-notification.component.css']
})
export class MessageNotificationComponent implements OnInit {

  messageItem:MessageModel[];


  constructor(private userService:UserService) { }

  ngOnInit(): void {

    let user=localStorage.getItem("userId");
    this.userService.getMessage(user)
    .subscribe((data)=>
    { 
      this.messageItem  =JSON.parse(JSON.stringify(data));
      console.log(this.messageItem);
    })

  }

}
