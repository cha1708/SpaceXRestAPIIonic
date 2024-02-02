import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( public http: HttpClient) { }

  getSpaceXInformation(){
    return this.http.get('https://api.spacexdata.com/v2/launches')
  }
}
