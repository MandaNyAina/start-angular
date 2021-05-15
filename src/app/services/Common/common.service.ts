import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api_response } from 'src/app/interface/api_response';
import { base_url} from '../../config/config.json'; 

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private _http: HttpClient) { }

  public doPost(endpoint: string, data: any): Observable<Api_response | any> {
    return this._http.post(`${base_url}/${endpoint}`, data);
  }

  private toQueryString(query: any): string {
    var parts = [];
    for (var property in query) {
      var value = query[property];
      if (value != null && value != undefined) {
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value))
      }
    }
    
    return query !== "" ? "?" + parts.join('&') : "";
 }

  public doGet(endpoint: string, params: any = {}): Observable<Api_response | any> {
    return this._http.get(`${base_url}/${endpoint+this.toQueryString(params)}`);
  }

  public doDelete(endpoint: string, data: any) {
    return this._http.delete(`${base_url}/${endpoint}`, data);
  }

}
