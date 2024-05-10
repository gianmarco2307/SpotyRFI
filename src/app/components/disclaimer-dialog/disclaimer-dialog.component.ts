import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-disclaimer-dialog',
  standalone: true,
  imports: [MatButton, MatDialogModule],
  templateUrl: './disclaimer-dialog.component.html',
  styleUrls: ['./disclaimer-dialog.component.css'],
})
export class DisclaimerDialogComponent {
  
}