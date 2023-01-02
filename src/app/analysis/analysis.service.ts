import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../core/http/http.service';

@Injectable()
export class AnalysisService {
  public url: string = environment.baseUrl
  constructor(private http: HttpService) { }

  getAnalysisDetails(data: any) {
    return this.http.httpPostRequest(`${this.url}analytics/`, data);
  }
}
