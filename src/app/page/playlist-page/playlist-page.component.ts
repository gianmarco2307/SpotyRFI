import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { TratteService } from 'src/app/services/tratte.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Tratta } from 'src/app/model/tratta';
import { MonitorComponent } from 'src/app/components/monitor/monitor.component';

@Component({
  selector: 'app-playlist-page',
  standalone: true,
  imports: [NgIf, NgForOf, NgClass, MonitorComponent],
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css'],
})
export class PlaylistPageComponent {
  tratteService = inject(TratteService);
  firebaseService = inject(FirebaseService);

  id = signal<string | null>('');
  tratte = signal<Tratta[]>([]);
  trattaSrc!: SafeResourceUrl;          //questa variabile è d'appoggio
  srcs: SafeResourceUrl[] = [];         //array che raccoglie tutti i nostri url sanificati
  actualStation = signal<string>('');
  actualManager = signal<string>('');
  actualLine = signal<string>('');

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer){}

  ngOnInit(){
    this.id.set(this.route.snapshot.paramMap.get('id'));
    
    this.firebaseService.getTratte().subscribe((data: any) => {
      for(let tratta of data){        //con il ciclo prende l'src di ogni "tratta" 
        this.trattaSrc = this.sanitizer.bypassSecurityTrustResourceUrl(tratta.src);       //assegna a trattaSrc l'url sanificato
        this.srcs.push(this.trattaSrc);           //pusho nell'array
      }
      this.tratte.set(data);
    })
  }

  stationToModal(clickedStation: string, manager: string, line: string){
    this.actualStation.set(clickedStation);
    this.actualManager.set(manager);
    this.actualLine.set(line);
  }

  openMaps(){
    let url!: string;
    let daCercare!: string;

    console.log(this.actualLine() + ' ' + this.actualStation() + ' ' + this.actualManager());
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
}
