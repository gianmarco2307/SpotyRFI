import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tabellone',
  templateUrl: './tabellone.component.html',
  styleUrls: ['./tabellone.component.css']
})
export class TabelloneComponent {
  path = '';

  constructor(location: Location) {
    let temporaryPath = location.path().split("/");
    this.path = temporaryPath[1].toUpperCase();
  }
}
