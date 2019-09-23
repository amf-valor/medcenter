import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ServicosComponent } from './servicos.component';
import { MedcenterApiService } from '../_services/medcenter-api.service';
import { MatSnackBar } from '@angular/material';
import { ServicoModel } from './servico.model';

@Component({
    selector: 'md-exames',
    templateUrl: './servicos.component.html',
    styleUrls: ['./servicos.component.css'],
    encapsulation: ViewEncapsulation.None
  })
  
  export class ExamesComponent extends ServicosComponent {

    constructor(
        medcenterApiService: MedcenterApiService,
        snackBar: MatSnackBar) { 
        
            const model:ServicoModel = {
                title: 'Exames',
                icon: 'fas fa-3x fa-diagnoses',
                searchLabel: 'Qual exame está procurando?',
                type:'exam'
            }  
          
            super(medcenterApiService, snackBar, model); 
      }
  }