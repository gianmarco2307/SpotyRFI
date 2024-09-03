import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MonitorService } from 'src/app/services/monitor.service';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.css'
})
export class MonitorComponent implements OnInit {
  htmlContent: SafeHtml = '';

  constructor(private monitor: MonitorService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.monitor.getHtml().then(data => {
      //@ts-ignore
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(data);
      }).catch(error => {
      console.error('Errore nel recupero dell\'HTML:', error);
      });
  }
}
