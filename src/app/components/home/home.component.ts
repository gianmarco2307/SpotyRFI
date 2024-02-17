import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeTab: string = 'tab1';

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
