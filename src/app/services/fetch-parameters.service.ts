import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thing } from '../thing';

@Injectable({
  providedIn: 'root'
})

export class FetchParametersService {
  constructor(private http: HttpClient) { }

  getParameters(): Observable<Thing[]> {
    return this.http.get<Thing[]>('assets/things.json');
  }
}
