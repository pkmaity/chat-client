import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  toUser: string;
  msg: any;
  totBoxLength: number = 18;
  newChatBox: string[] = [];
  users: object[];

  constructor(private _chatServ: ChatService) { 

    this._chatServ.userDetailsCatch$
    .subscribe((res: string[]) => { 
      console.log(res);
      /**
       * Removing self user name from active user's list
       */
      if(res.indexOf(localStorage.user) !== -1)
        res.splice(res.findIndex(data => data === localStorage.user), 1);

      /**
       * Rest will show online
       */
      this.users = res.map((value) => {
        return {userId: value, name: value.toUpperCase() }
      });

    });

    this._chatServ.logoutUserName$.subscribe(res => {
      if(this.newChatBox.indexOf(res) !== -1)
        this.users.splice(this.newChatBox.findIndex(val => val === res));
    })
  }

  ngOnInit() {
    this._chatServ.emit('online users');
  }

  showChat(user: string ){
    this.totBoxLength -= 6;
    this.newChatBox.push(user);
  }

  removeChatBox(userName: string){
    this.totBoxLength += 6;
    this.newChatBox.splice(this.newChatBox.findIndex(val => { return val === userName}));
  }

}
