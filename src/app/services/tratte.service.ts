import { Injectable, inject, signal } from '@angular/core';
import { Tratta } from '../model/tratta';
import { CollectionReference, Firestore, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TratteService {
  tratte = signal<Tratta[]>([]);

  constructor() { }
}
