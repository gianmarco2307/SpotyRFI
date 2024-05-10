import { Component, OnInit, signal } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Subject } from 'rxjs';
import { Router, RouterOutlet } from '@angular/router';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-tratte',
  standalone: true,
  imports: [NgForOf, NgIf, NgClass],
  templateUrl: './tratte.component.html',
  styleUrls: ['./tratte.component.css'],
})
export class TratteComponent implements OnInit {
  listaTratte: any[] = [];
  sendID = new Subject<string>();
  sendID$ = this.sendID.asObservable();
  activeTab = signal<string>("tutti");

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }

  sendInfo(trattaId: string) {
    // console.log("Tentativo di inviare ID:", trattaId);
    this.sendID.next(trattaId);
    // console.log("ID passato a sendID:", trattaId);
    this.router.navigateByUrl(`/tratta/${trattaId}`);
  }

  setActiveTab(tab: string) {
    this.activeTab.set(tab);
  }

  isActiveTab(tab: string): boolean {
    return this.activeTab() === tab;
  }
}
