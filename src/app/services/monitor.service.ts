import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonitorService {
  private apiUrl =
    'https://iechub.rfi.it/ArriviPartenze/ArrivalsDepartures/Monitor?placeId=';

  getArrivals(id: number) {
    window.open(`${this.apiUrl}${id}&arrivals=True`, '_blank');
  }

  getDepartures(id: number) {
    window.open(`${this.apiUrl}${id}&arrivals=False`, '_blank');
  }
}
