import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css'],
  standalone: true
})
export class PlaylistPageComponent {
  id: String | null = null;
  tratte: any[] = [];
  stations: any[][] =  [];
  trattaSrc!: SafeResourceUrl;          //questa variabile è d'appoggio
  srcs: SafeResourceUrl[] = [];         //array che raccoglie tutti i nostri url sanificati
  actualStation: string = '';
  actualLine: string = '';

  constructor(protected fireServ: FirebaseService, private route: ActivatedRoute, private sanitizer: DomSanitizer){}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.fireServ.getTratte().subscribe((data: any) => {
      let i = 0;
      for(let tratta of data){        //con il ciclo prende l'src di ogni "tratta" 
        let temporaryStations: string[];
        this.trattaSrc = this.sanitizer.bypassSecurityTrustResourceUrl(tratta.src);       //assegna a trattaSrc l'url sanificato
        this.srcs.push(this.trattaSrc);           //pusho nell'array
        this.stations[i] = this.stations[i] || [];
        temporaryStations = tratta.stations.split('_');
        this.stations[i] = temporaryStations;
        i++;
      }
      this.tratte = data;
    })
  }

  stationToModal(clickedStation: string, line: string){
    this.actualStation = clickedStation;
    this.actualLine = line;
  }

  openMaps(){
    let url!: string;
    let daCercare!: string;
    if(this.actualLine == 'AMAT'){
      daCercare = 'fermata tram ' + this.actualLine + ' di ' + this.actualStation + ' Palermo';
    } else if(this.actualLine == 'atm') {
      daCercare = 'fermata tram ' + this.actualLine + ' di ' + this.actualStation + ' Messina';
    } else {
      daCercare = 'stazione di ' + this.actualStation;
    }
    url = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(daCercare);
    window.open(url, '_blank');
    console.log(url)
  }
}
