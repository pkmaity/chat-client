import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';
import { Router } from '@angular/router';
import { retry, catchError } from "rxjs/operators";
import { of } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
// import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _chatServ: ChatService,
    private _services: CommonService,
    private _router: Router
  ) { }

  ngOnInit() {
    if(!!localStorage.token){
      this._router.navigate(["/"]);
    }
  }

  onSubmit(f: NgForm){
    
    this._services.login(f.value)
    .pipe(
        retry(3),
        catchError(err => {throw 'err ho gaya hey'})
    )
    .subscribe((res: any) => {
      
      if(!!res.token) { 
        localStorage.setItem('token', res.token); 
        this._chatServ.setUser(f.value.username);
        this._router.navigate(["/"]);
      }
      else if(res.msg)
        console.log(res.msg);
    }, (err) => console.log(err));

  }

}
