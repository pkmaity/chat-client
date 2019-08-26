import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  socket = io(environment.apiUrl);
  url: string;

  constructor() {
    this.socket.on('message', (data) => console.log(data));
    this.socket.on('offline user', (data) => console.log(data));
  }

  /**
   *@setUser send new user req to the server for his/her activation status
   */
  setUser(user: string){
    console.log(user);
    this.socket.emit('new user', user);
  }

  /**
   * @listen accept event pass data to it's subscriber
   * @param eventType stands for any kind of event emited by server
   */
  listen(eventType: string){

    return new Observable((subscriber) => {

      this.socket.on(eventType, (data) => {
        subscriber.next(data);
      });

    });

  }

  /**
   * @param eventType stands for any kind of event emited by client
   * @param data which user want to send to the other user(s)
   */
  emit(eventType: string, data: any){

    this.socket.emit(eventType, data);

  }

}
