import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-disclaimer-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule],
  templateUrl: './disclaimer-dialog.component.html',
  styleUrls: ['./disclaimer-dialog.component.css'],
})
export class DisclaimerDialogComponent {
  protected visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  
}