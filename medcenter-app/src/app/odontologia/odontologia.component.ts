import { Component, OnInit } from '@angular/core';
import { masks } from '../_shared/masks';
import { MedcenterApiService } from '../_services/medcenter-api.service';

@Component({
  selector: 'app-odontologia',
  templateUrl: './odontologia.component.html',
  styleUrls: ['./odontologia.component.css']
})
export class OdontologiaComponent implements OnInit {

  phone: string;
  PHONE_MASK = masks.PHONE;
  whatsAppLink:string;
  
  constructor(private medcenterApiService: MedcenterApiService) { 
    this.medcenterApiService.phone.subscribe(phone => this.phone = phone);
    this.medcenterApiService.whatsApp.subscribe(whatsApp => {
      this.whatsAppLink = `https://api.whatsapp.com/send?phone=55${whatsApp}&text=Olá%20Medcenter%20guaianases%20gostaria%20de%20agendar%20uma%20consulta%20odontológica.`
    })
  }

  ngOnInit() {
  }

}
