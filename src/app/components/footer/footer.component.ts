import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {

  constructor() {}

  disclaimer(){
    window.alert('SpotiRFI è un sito indipendente e non è affiliato, sponsorizzato o approvato da Spotify o RFI. Non abbiamo l’intenzione di ledere in alcun modo la loro immagine o reputazione. Il nostro obiettivo è fornire un servizio utile e di qualità per i nostri utenti, nel rispetto dei diritti di proprietà intellettuale e delle normative vigenti.')
  }
}
