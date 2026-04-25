import { Component } from '@angular/core';
import { DisclaimerDialogComponent } from '../disclaimer-dialog/disclaimer-dialog.component';
import { RouterLink } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, DisclaimerDialogComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private readonly dialogService: DialogService) {}

  protected showPrivacyPolicy() {
    this.dialogService.open(PrivacyPolicyComponent, {
      header: 'Privacy Policy',
      width: '70vw',
    });
  }
}
