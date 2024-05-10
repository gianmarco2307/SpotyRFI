import { Injectable, OnInit, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Tratta } from '../model/tratta';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore = inject(Firestore);
  tratteCollection = collection(this.firestore, 'tratte');

  getTratte(): Observable<Tratta[]> {
    return collectionData(this.tratteCollection, {
      idField: 'id'
    }) as Observable<Tratta[]>;
  }
  
}
