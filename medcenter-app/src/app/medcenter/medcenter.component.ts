import { Component, OnInit } from '@angular/core';
import { MedcenterApiService } from '../_services/medcenter-api.service';

@Component({
  selector: 'app-medcenter',
  templateUrl: './medcenter.component.html',
  styleUrls: ['./medcenter.component.css']
})
export class MedcenterComponent implements OnInit {

  address: string;

  constructor(private medcenterApiService: MedcenterApiService) { 
    this.medcenterApiService.address.subscribe(address => {this.address = address})
  }

  ngOnInit() {
  }

}
