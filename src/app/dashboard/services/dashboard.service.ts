import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class DashboardService {
  public url: string = environment.baseUrl
  constructor(private http: HttpService) { }

  getDashboardDetails() {
    console.log(this.url)
    return this.http.httpPostRequest(`${this.url}dashboard/`,null);
  }

  getAllFile(data:any) {
    return this.http.httpPostRequest(`${this.url}list/`,data);
  }

  getFileById(id:any) {
    return this.http.httpPostRequest(`${this.url}particular_data/`,{id:id});
  }

  deleteFile(id:any) {
    return this.http.httpDeleteRequest(`${this.url}delete_data/${id}/`);
  }

  reviewFiles(data:any) {
    return this.http.httpPostRequest(`${this.url}approve_reject/`,data);
  }
}
