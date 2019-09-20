import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MedcenterApiService } from '../_services/medcenter-api.service';
import { BaseComponent } from '../_core/base.component';
import { MatSnackBar } from '@angular/material';
import { Especialidade } from './especialidade.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'md-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EspecialidadesComponent extends BaseComponent implements OnInit {

  especialidades: Especialidade[];
  private previousPage: number;
  private nextPage: number;

  get hasNextPages(): boolean{
    return this.nextPage > 0
  }

  get hasPreviousPages(): boolean{
    return this.previousPage > 0
  }

  get hasPages(): boolean{
    return this.hasNextPages || this.hasPreviousPages;
  }

  constructor(
    private medcenterApiService: MedcenterApiService,
    snackBar: MatSnackBar) { 
      super(snackBar);
  }

  ngOnInit() {
    this.refreshSpecialties(1);
  }

  private refreshSpecialties(page: number): void{
    this.scrollToTop();
    this.showProgress();
    
    this.medcenterApiService.getSpecialties(page)
      .pipe(
        finalize(() => this.hideProgress())
      ).subscribe(pagedResponse =>{
          this.nextPage = pagedResponse.nextPage;
          this.previousPage = pagedResponse.previousPage;
          this.especialidades = pagedResponse.results;
        }, err =>{
          this.showSnackBar('Ooops! Houve um erro ao buscar nossas especialidades tente mais tarde!')
        })  
  }

  onNextButtonClick(): void{
    this.refreshSpecialties(this.nextPage);  
  }

  onPreviousButtonClick(): void{
    this.refreshSpecialties(this.previousPage);  
  }
}
