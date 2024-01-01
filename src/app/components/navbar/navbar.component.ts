import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sharePage() {
    if (navigator.share) {
      navigator.share({
        title: 'SpotiRFI',
        text: '',
        url: window.location.href
      })
      .then(() => console.log('Pagina condivisa'))
      .catch((error) => console.error('Errore: ', error));
    } else {
      window.alert('Condivisione non riuscita');
    }
  }
}
