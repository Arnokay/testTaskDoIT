import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {AuthService} from "./auth.service";

@Injectable()
export class MarkerService {

  private url: string = 'http://localhost:3000/api/markers';
  private jwt: string = this.auth.getToken();
  private headers = new Headers({ 'Authorization': 'Bearer ' + this.auth.getToken()});        //!!!

  constructor(private http: Http, private auth:AuthService) { }

  getMarkers() {
    return this.http.get(this.url, {headers: this.headers})
      .toPromise()
      .then(res => res.json());
  }

  saveMarkers(markers) {
    return this.http.put(this.url, {markers}, {headers: this.headers})
      .toPromise();
  }
}
