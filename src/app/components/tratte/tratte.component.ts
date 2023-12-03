import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tratte',
  templateUrl: './tratte.component.html',
  styleUrls: ['./tratte.component.css']
})
export class TratteComponent implements OnInit {
  listaTratte : any[] = [];
  sendID = new Subject<string>();
  sendID$ = this.sendID.asObservable();

  constructor(private firebase : FirebaseService,
    private router: Router){}


  ngOnInit(){

    this.firebase.getTratte().subscribe((data: any) => {
      this.listaTratte = data;
      // console.log(this.listaTratte)
    });


    
  }

sendInfo(trattaId: string) {
      // console.log("Tentativo di inviare ID:", trattaId);
      this.sendID.next(trattaId);
      // console.log("ID passato a sendID:", trattaId);
      this.router.navigateByUrl(`/tratta/${trattaId}`);
    }


}
