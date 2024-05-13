import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Tratta } from 'src/app/model/tratta';

@Component({
  selector: 'tratta-card',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './tratta-card.component.html',
  styleUrl: './tratta-card.component.css'
})
export class TrattaCardComponent {

  @Input({required: true})
  tratta!: Tratta;

  @Input({required: true})
  activeTab!: string;

  sendID = new Subject<string>();
  sendID$ = this.sendID.asObservable();

  constructor(private router: Router) {}

  sendInfo(trattaId: string) {
    // console.log("Tentativo di inviare ID:", trattaId);
    this.sendID.next(trattaId);
    // console.log("ID passato a sendID:", trattaId);
    this.router.navigateByUrl(`tratte/${trattaId}`);
  }
}
