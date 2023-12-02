import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore : AngularFirestore ) { }

  getTratte(): Observable<any[]> {
    return this.firestore.collection('tratte').valueChanges();
  }
  
}
