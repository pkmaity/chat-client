import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  /**
   * check whether user is logged in or not
   */
  isLoggedIn(){
    return !!localStorage.token;
  }

  /**
   * It will send user's credentials to the server for varification
   * @userInfo holds the user's credentials as object
   */
  login(userInfo: object): Observable<object>{
    return this.http.post(this.url+'/login', userInfo);
  }

}
