import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  openLink(url: string){
    window.open(url, "_blank");
  }

  title = 'app';

  ngAfterViewInit() {
    $(function () {
      $('[data-toggle="popover"]').popover()
    })
  }
}
