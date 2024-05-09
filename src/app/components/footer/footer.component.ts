import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DisclaimerDialogComponent } from '../disclaimer-dialog/disclaimer-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true
})
export class FooterComponent {

  constructor(protected dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DisclaimerDialogComponent);
  }
  
  disclaimer(){
    window.alert('SpotiRFI è un sito indipendente e non è affiliato, sponsorizzato o approvato da Spotify o RFI. Non abbiamo l’intenzione di ledere in alcun modo la loro immagine o reputazione. Il nostro obiettivo è fornire un servizio utile e di qualità per i nostri utenti, nel rispetto dei diritti di proprietà intellettuale e delle normative vigenti.')
  }
}
