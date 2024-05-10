import { Injectable, OnInit, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore = inject(Firestore);
  tratteCollection = collection(this.firestore, 'tratte');

  getTratte(): Observable<any[]> {
    return collectionData(this.tratteCollection, {
      idField: 'id'
    })
  }
  
}
