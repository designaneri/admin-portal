import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class FilesService {
  public url: string = environment.baseUrl
  constructor(private http: HttpService) { }

  uploadFile(data: any) {
    let type = 'BOE'
    let fd = new FormData();
    data.forEach((element:any) => {
      fd.append('all_files', element);
    });
    fd.append('file_type', type);
    
    return this.http.httpPostRequest(`${this.url}upload/`, fd);
  }
}
