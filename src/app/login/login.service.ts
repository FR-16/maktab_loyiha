import { Injectable } from '@angular/core';
import { environment } from 'src/environments/envirnment';
import { jwtUtil } from '../core/jwt.util';
import { HttpClient } from '@angular/common/http';
import { AccauntService } from '../core/accaunt.service';
import { User } from '../shared/model.ts/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = environment.baseUrl +"/api/account";

  constructor(public jwtUtil:jwtUtil ,public http:HttpClient ,public accauntService:AccauntService) { }


  register(user:User):Observable<any> {
    return this.http.post<any>(this.api = "/register" , user)


  }



}
