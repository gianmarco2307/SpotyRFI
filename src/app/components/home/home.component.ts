import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent {
  activeTab: string = 'benvenuto';

  ngAfterViewInit() {
    $(function () {
      $('[data-toggle="popover"]').popover()
    })
  }

  openLink(url: string){
    window.open(url, "_blank");
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  isActiveTab(tab: string): boolean {
    return this.activeTab === tab;
  }

  title = 'app';
}
