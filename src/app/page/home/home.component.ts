import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TabViewModule, TooltipModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
}
