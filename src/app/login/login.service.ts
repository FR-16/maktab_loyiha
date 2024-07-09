import { Injectable } from '@angular/core';
import { environment } from 'src/environments/envirnment';
import { jwtUtil } from '../core/jwt.util';
import { HttpClient } from '@angular/common/http';
import { AccauntService } from '../core/accaunt.service';
import { User } from '../shared/model.ts/user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = environment.baseUrl+"/api/account";

  constructor(public jwtUtil: jwtUtil, public http: HttpClient, public accountService: AccauntService) { }



  login(loginParol: any): Observable<any> {
    return this.http.post<any>(this.api + "/authenticate", loginParol)
    .pipe( map((token)=>{     
        this.jwtUtil.save(token.token, loginParol.rememberMe);
        this.accountService.identity(true)
      })
    );
  }
  register(user: User): Observable<any> {
    return this.http.post<any>(this.api + "/register", user);
  }
  logout(): void {
    this.jwtUtil.clear();
    this.accountService.authenticate(null);
  }


}
