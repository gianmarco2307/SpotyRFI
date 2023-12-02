import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css']
})
export class PlaylistPageComponent {
  id: String | null = null;
  tratte: any[] = [];
  trattaSrc!: SafeResourceUrl;
  srcs: SafeResourceUrl[] = [];

  constructor(protected fireServ: FirebaseService, private route: ActivatedRoute, private sanitizer: DomSanitizer){}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.fireServ.getTratte().subscribe((data: any) => {
      for(let tratta of data){
        this.trattaSrc = this.sanitizer.bypassSecurityTrustResourceUrl(tratta.src);
        this.srcs.push(this.trattaSrc);
      }
      this.tratte = data;
    })
  }
}
