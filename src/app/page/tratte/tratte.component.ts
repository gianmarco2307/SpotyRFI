import { Component, OnInit, inject, signal } from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { TratteService } from 'src/app/services/tratte.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TrattaCardComponent } from 'src/app/components/tratta-card/tratta-card.component';
import { LoadingTrattaComponent } from 'src/app/components/loading-tratta/loading-tratta.component';
import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-tratte',
  standalone: true,
  imports: [NgForOf, NgIf, NgClass, TrattaCardComponent, LoadingTrattaComponent, TabViewModule, SidebarModule, ButtonModule, DialogModule],
  templateUrl: './tratte.component.html',
  styleUrls: ['./tratte.component.css'],
})
export class TratteComponent implements OnInit {
  tratteService = inject(TratteService);
  firebaseService = inject(FirebaseService);

  activeTab = signal<string>('treno');
  sidebarVisible = false;
  disclaimerVisible = false;

  tabs = ['Treno', 'Tram', 'Metro', 'Tutti'];

  constructor() {}

  ngOnInit() {
    this.firebaseService
      .getTratte()
      .subscribe((tratte) => this.tratteService.tratte.set(tratte));
  }

  onChange(event: any) {
    this.activeTab.set(this.tabs[event.index].toLowerCase());
  }
}
