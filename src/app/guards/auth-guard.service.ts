import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(
    private _chatServ: ChatService,
    private _services: CommonService,
    private _router: Router) { }

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean {
      if(!this._services.isLoggedIn()){
        this._router.navigate(['/login']);
      }
      return this._services.isLoggedIn();
    }

}
