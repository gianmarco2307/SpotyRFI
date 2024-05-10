import { Component, OnInit, inject, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, RouterOutlet } from '@angular/router';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { TratteService } from 'src/app/services/tratte.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-tratte',
  standalone: true,
  imports: [NgForOf, NgIf, NgClass],
  templateUrl: './tratte.component.html',
  styleUrls: ['./tratte.component.css'],
})
export class TratteComponent implements OnInit {
  tratteService = inject(TratteService);
  firebaseService = inject(FirebaseService);

  listaTratte: any[] = [];
  sendID = new Subject<string>();
  sendID$ = this.sendID.asObservable();
  activeTab = signal<string>('tutti');

  constructor(private router: Router) {}

  ngOnInit() {
    this.firebaseService
      .getTratte()
      .subscribe((tratte) => this.tratteService.tratte.set(tratte));
  }

  sendInfo(trattaId: string) {
    // console.log("Tentativo di inviare ID:", trattaId);
    this.sendID.next(trattaId);
    // console.log("ID passato a sendID:", trattaId);
    this.router.navigateByUrl(`/tratte/${trattaId}`);
  }

  setActiveTab(tab: string) {
    this.activeTab.set(tab);
  }

  isActiveTab(tab: string): boolean {
    return this.activeTab() === tab;
  }
}
