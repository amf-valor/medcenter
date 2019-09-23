import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ServicosComponent } from './servicos.component';
import { MedcenterApiService } from '../_services/medcenter-api.service';
import { MatSnackBar } from '@angular/material';
import { ServicoModel } from './servico.model';

@Component({
    selector: 'md-especialidades',
    templateUrl: './servicos.component.html',
    styleUrls: ['./servicos.component.css'],
    encapsulation: ViewEncapsulation.None
  })
  
  export class EspecialidadesComponent extends ServicosComponent {

    constructor(
        medcenterApiService: MedcenterApiService,
        snackBar: MatSnackBar) { 
        
            const model:ServicoModel = {
                title: 'Especialidades',
                icon: 'fas fa-3x fa-user-md',
                searchLabel: 'Qual especialidade está procurando?',
                type:'specialty'
            }  
          
            super(medcenterApiService, snackBar, model); 
      }
  }