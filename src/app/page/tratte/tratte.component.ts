import { Component, OnInit, inject, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, RouterOutlet } from '@angular/router';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { TratteService } from 'src/app/services/tratte.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TrattaCardComponent } from 'src/app/components/tratta-card/tratta-card.component';
import { LoadingTrattaComponent } from 'src/app/components/loading-tratta/loading-tratta.component';

@Component({
  selector: 'app-tratte',
  standalone: true,
  imports: [NgForOf, NgIf, NgClass, TrattaCardComponent, LoadingTrattaComponent],
  templateUrl: './tratte.component.html',
  styleUrls: ['./tratte.component.css'],
})
export class TratteComponent implements OnInit {
  tratteService = inject(TratteService);
  firebaseService = inject(FirebaseService);

  activeTab = signal<string>('treno');

  constructor() {}

  ngOnInit() {
    this.firebaseService
      .getTratte()
      .subscribe((tratte) => this.tratteService.tratte.set(tratte));
  }

  setActiveTab(tab: string) {
    this.activeTab.set(tab);
  }

  isActiveTab(tab: string): boolean {
    return this.activeTab() === tab;
  }
}
