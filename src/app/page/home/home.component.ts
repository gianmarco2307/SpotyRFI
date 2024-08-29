import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';

declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, TabViewModule],
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
}
