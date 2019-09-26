import { Component, OnInit, OnDestroy } from '@angular/core';
import { MedcenterApiService } from 'src/app/_services/medcenter-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'md-zap-button',
  templateUrl: './zap-button.component.html',
  styleUrls: ['./zap-button.component.css']
})
export class ZapButtonComponent implements OnInit{
  whatsAppNumber: string;
  whatsAppLink: string;

  constructor(private medcenterApiService: MedcenterApiService) { 
    this.medcenterApiService.whatsApp.subscribe(whatsApp => {
      this.whatsAppNumber = whatsApp
      this.whatsAppLink = `https://api.whatsapp.com/send?phone=55${whatsApp}&text=Olá%20Medcenter%20guaianases%20gostaria%20de%20agendar%20um%20exame%20ou%20consulta`
    })
  }

  ngOnInit() {
    
  }
}
