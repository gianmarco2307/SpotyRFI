import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngAfterViewInit() {
    $(function () {
      $('[data-toggle="popover"]').popover()
    })
  }

  openLink(url: string){
    window.open(url, "_blank");
  }

  title = 'app';
}
