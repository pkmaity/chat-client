import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  @Input('toWhome') newUser: string;
  @Output('removeOneChatBox') removeOneChatBox: EventEmitter<string> = new EventEmitter<string>();
  newMsg: string;

  constructor(private _chatServ: ChatService) {
    this._chatServ.cahtOutput$.subscribe(res => {
      console.log(res);
    });

   }

  ngOnInit() {
  }

  sendMessage(){
    this._chatServ.emit('send message', { toUser: this.newUser, msg: this.newMsg })
  }

  removeChatBox(){
    
    this.removeOneChatBox.emit(this.newUser);

  }

}
