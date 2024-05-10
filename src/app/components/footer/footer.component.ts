import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DisclaimerDialogComponent } from '../disclaimer-dialog/disclaimer-dialog.component';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatButton, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {

  constructor(protected dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DisclaimerDialogComponent);
  }
}
