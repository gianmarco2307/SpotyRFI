import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  activeTab = signal<string>("benvenuto");

  ngAfterViewInit() {
    $(function () {
      $('[data-toggle="popover"]').popover()
    })
  }

  openLink(url: string){
    window.open(url, "_blank");
  }

  setActiveTab(tab: string) {
    this.activeTab.set(tab);
  }

  isActiveTab(tab: string): boolean {
    return this.activeTab() === tab;
  }
}
