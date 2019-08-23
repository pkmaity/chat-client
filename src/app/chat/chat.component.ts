import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  toUser: string;
  fromUser: string;
  msg: any;

  constructor(private _chatServ: ChatService) {
    this._chatServ.subject$.subscribe(data => console.log(data));
   }

  ngOnInit() {
  }

  setUser(){
    this._chatServ.setUser(this.fromUser);
  }

  sendMessage(){

    let data = {
      toUser: this.toUser,
      msg: this.msg
    }

    this._chatServ.emit('send message', data);

  }

}
