import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { TratteService } from 'src/app/services/tratte.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Tratta } from 'src/app/model/tratta';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MonitorService } from 'src/app/services/monitor.service';
import { ButtonModule } from 'primeng/button';
import { Station } from 'src/app/model/station';


@Component({
  selector: 'app-playlist-page',
  standalone: true,
  imports: [NgIf, NgForOf, NgClass, ProgressSpinnerModule, ButtonModule],
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css'],
})
export class PlaylistPageComponent {
  tratteService = inject(TratteService);
  firebaseService = inject(FirebaseService);

  loading: boolean = true;
  id = signal<string | null>('');
  tratta = signal<Tratta>({} as Tratta);
  sanitizedSrc!: SafeResourceUrl;
  actualStation = signal<Station>({} as Station);
  actualManager = signal<string>('');
  actualLine = signal<string>('');

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router, private monitor: MonitorService){}

  ngOnInit(){
    this.id.set(this.route.snapshot.paramMap.get('id'));
    
    this.firebaseService.getTratte().subscribe((data: any) => {
      this.loading = true;
      this.tratta.set(data.find((el: Tratta) => el.trattaId == this.id()));
      if(this.tratta() !== undefined) {
        this.sanitizedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.tratta().src);
      } else {
        this.router.navigate([`/${this.id()}`]);
      }
      this.loading = false;
    })
  }

  stationToModal(clickedStation: Station, manager: string, line: string){
    this.actualStation.set(clickedStation);
    this.actualManager.set(manager);
    this.actualLine.set(line);
  }

  openMaps(){
    let url!: string;
    let daCercare!: string;

    // console.log(this.actualLine() + ' ' + this.actualStation() + ' ' + this.actualManager());
    if(this.actualManager() == 'AMAT'){
      daCercare = `fermata ${this.actualManager()} tram ${this.actualManager()} di ${this.actualStation()} Palermo`;
    } else if(this.actualManager() == 'atm') {
      daCercare = `fermata ${this.actualManager()} tram ${this.actualLine()} di ${this.actualStation()} Messina`;
    } else {
      daCercare = `stazione ${this.actualManager()} di ${this.actualStation()}`;
    }
    url = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(daCercare);
    window.open(url, '_blank');
  }

  openArrivals(){
    this.monitor.getArrivals(this.actualStation().stationId);
  }

  openDepartures(){
    this.monitor.getDepartures(this.actualStation().stationId);
  }
}
