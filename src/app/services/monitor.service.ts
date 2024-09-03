import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonitorService {
  private apiUrl =
    'https://iechub.rfi.it/ArriviPartenze/ArrivalsDepartures/Monitor?placeId=2018&arrivals=False';

  constructor(private http: HttpClient) {}

  getHtml(): Promise<string | undefined> {
    return this.http.get(this.apiUrl, { responseType: 'text' }).toPromise();
  }
}
