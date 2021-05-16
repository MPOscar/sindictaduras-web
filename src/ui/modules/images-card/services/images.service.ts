import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//
import { Observable } from 'rxjs';
//

import { Face } from '../models/face';
import {ConfigService} from '../../../../common/config/services/config.service';
import {HttpHeadersInterceptorService} from '../../../../common/error-handling/interceptors/http-headers-interceptor.service';
import {RequestOptions} from '../../../../common/error-handling/services/error-handling-http.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  baseUrl: string;

  toEditFace: Face;

  constructor(private http: HttpClient,
              private httpHeaders: HttpHeadersInterceptorService,
              private configService: ConfigService,
  ) {
    this.baseUrl = this.configService.apiUrl + this.configService.config.apiConfigs.images.apiEndpoint;
  }

  postImage(image: File): Observable<{ data: { url: string } }> {
    const requestOptions: RequestOptions = { headers: this.httpHeaders.getHeaders() };
    requestOptions.headers = requestOptions.headers.delete('Content-Type');
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<any>(this.baseUrl, formData, requestOptions);
  }
}
