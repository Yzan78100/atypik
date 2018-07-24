import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Logements} from './models/logement';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
logement: Logements;



constructor(private http: HttpClient) { }

  getlotData() {
    let configUrl = 'assets/data/lot.json';
    return this.http
    .get(configUrl)
  }
}
