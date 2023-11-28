import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @ViewChild('liveAlertPlaceholder', { static: true })
  alertPlaceholder!: ElementRef;
  @ViewChild('liveAlertBtn', { static: true }) alertTrigger!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.listen(this.alertTrigger.nativeElement, 'click', () => {
      this.appendAlert(
        'SpotiRFI è un sito indipendente e non è affiliato, sponsorizzato o approvato da Spotify o RFI. Non abbiamo l’intenzione di ledere in alcun modo la loro immagine o reputazione. Il nostro obiettivo è fornire un servizio utile e di qualità per i nostri utenti, nel rispetto dei diritti di proprietà intellettuale e delle normative vigenti.',
        'success'
      );
    });
  }

  appendAlert(message: string, type: string): void {
    const wrapper: HTMLDivElement = this.renderer.createElement('div');
    this.renderer.setProperty(
      wrapper,
      'innerHTML',
      [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
      ].join('')
    );

    this.renderer.appendChild(this.alertPlaceholder.nativeElement, wrapper);
  }
}
