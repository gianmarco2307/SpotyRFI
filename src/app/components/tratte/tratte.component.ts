import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-tratte',
  templateUrl: './tratte.component.html',
  styleUrls: ['./tratte.component.css']
})
export class TratteComponent implements OnInit {
  listaTratte : any[] = [];

  constructor(private firebase : FirebaseService){}


  ngOnInit(){

    this.firebase.getAlbums().subscribe((data: any) => {
      this.listaTratte = data;
      console.log(this.listaTratte)
    });

  }

}
