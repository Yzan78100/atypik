import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Logements} from './models/logement';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {




constructor(private http: HttpClient) { }

  getlotData() {
  console.log('ok');
    const configUrl = 'http://api.luggfly.com/api/logements';
    return this.http
    .get(configUrl);
  }
}
