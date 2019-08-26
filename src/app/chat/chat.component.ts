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
  totBoxLength: number = 18;
  newChatBox: string[] = [];
  users: string[];

  constructor(private _chatServ: ChatService) {
   }

  ngOnInit() {
    this.users = ['rk', 'sk'];
  }

  setUser(){
    this._chatServ.setUser(this.fromUser);
  }

  sendMessage(newUser: string, newMsg: string){

    let data = {
      toUser: newUser,
      msg: newMsg
    }

    this._chatServ.emit('send message', data);

  }

  showChat(user: string ){
    this.totBoxLength -= 6;
    this.newChatBox.push(user);
  }

  removeChatBox(user: string){
    this.totBoxLength += 6;
    this.newChatBox.splice( this.newChatBox.findIndex(val => val == user) , 1);
  }

}
