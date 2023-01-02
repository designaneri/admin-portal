import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private httpService: HttpService
  ) { }

  public getUserDetails(): any {
    let data = localStorage.getItem('userDetail')
    if (data) {
      return JSON.parse(localStorage.getItem('userDetail') || '');
    }
    return null
  }

  public setUserDetails(value: any) {
    localStorage.setItem('userDetail', JSON.stringify(value))
  }

  logout() {
    // this.httpService.httpDeleteRequest(`${environment.baseUrl}logout/`).subscribe(() => {
    //   localStorage.removeItem('userDetail');
    //   localStorage.clear()
      this.router.navigate(['/non-auth/login']);
    // });
  }

  loginUser(loginDetail: any) {
    // return this.httpService.httpPostRequest(`${environment.baseUrl}login/`, loginDetail);
  }

  registerUser(userDetails: any) {
      //  return this.httpService.httpPostRequest(`${environment.baseUrl}register/`, userDetails)
  }

}
