import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MenubarModule, AvatarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Le tratte',
                routerLink: 'tratte',
            },
            {
                label: 'Chi sono',
                routerLink: 'chisono', 
            },
            {
                label: 'RFI',
                externalLink: 'https://www.rfi.it/it.html',
            },
            {
                label: 'Spotify',
                externalLink: 'https://open.spotify.com/intl-it',
            }
        ];
    }
}
