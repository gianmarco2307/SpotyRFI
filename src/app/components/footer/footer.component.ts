import { Component } from '@angular/core';
import { DisclaimerDialogComponent } from '../disclaimer-dialog/disclaimer-dialog.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, DisclaimerDialogComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {

  constructor() {}

}
