import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _chatServ: ChatService,
    private _router: Router) { }

  ngOnInit() {
  }

  logout(){
    this._chatServ.emit('disconnect user', localStorage.user);
    delete localStorage.token;
    this._router.navigate(["/login"]);
  }
}
