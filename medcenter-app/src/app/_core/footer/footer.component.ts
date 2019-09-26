import { Component, OnInit } from '@angular/core';
import { MedcenterApiService } from 'src/app/_services/medcenter-api.service';
import { masks } from 'src/app/_shared/masks';

@Component({
  selector: 'md-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  cnpj: string;
  techinicalManager: string;
  companyName: string;
  address: string;
  phone: string;
  readonly CNPJ_MASK = masks.CNPJ;
  readonly PHONE_MASK = masks.PHONE;

  constructor(private medcenterApiService: MedcenterApiService) { 
    this.medcenterApiService.cnpj.subscribe(cnpj => this.cnpj = cnpj);
    
    this.medcenterApiService.techinicalManager.subscribe(
      techinicalManager => this.techinicalManager = techinicalManager);

    this.medcenterApiService.companyName.subscribe(companyName => this.companyName = companyName);
    this.medcenterApiService.address.subscribe(address => this.address = address);
    this.medcenterApiService.phone.subscribe(phone => this.phone = phone);
  }

  ngOnInit() {
  }

}
