import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { CommonModules } from '../common/common.module';
import { ChatBoxComponent } from './chat-box/chat-box.component';

@NgModule({
  declarations: [ChatComponent, ChatBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommonModules
  ]
})
export class ChatModule { }
