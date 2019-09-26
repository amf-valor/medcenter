import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServicoResponse } from './servico.response';
import { BaseComponent } from '../_core/base.component';
import { MedcenterApiService } from '../_services/medcenter-api.service';
import { MatSnackBar } from '@angular/material';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ServicoModel } from './servico.model';
import { AdminService } from '../_services/admin.service';
import { masks } from '../_shared/masks';

@Component({
  selector: 'md-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export abstract class ServicosComponent extends BaseComponent implements OnInit{
  
  model: ServicoModel;
  services: ServicoResponse[]
  private previousPage: number;
  private nextPage: number;
  private currentPage: number;
  searchValue: string = '';
  phone: string;
  PHONE_MASK = masks.PHONE;

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
    snackBar: MatSnackBar,
    model: ServicoModel,
    adminService: AdminService) { 
      super(snackBar, adminService);
      this.model = model;
      this.medcenterApiService.phone.subscribe(phone => this.phone = phone)
  }

  ngOnInit(){
    this.refreshServices(1);
  }

  protected refreshServices(page: number, name?:string): void{
    this.showProgress();
    
    if(name === undefined){
      this.medcenterApiService.getServices(page, this.model.type)
        .pipe(
          finalize(() => this.hideProgress())
        ).subscribe(pagedResponse =>{
            this.nextPage = pagedResponse.nextPage;
            this.previousPage = pagedResponse.previousPage;
            this.currentPage = pagedResponse.currentPage
            this.services = pagedResponse.results;
          }, err =>{
            if(environment.production){
              this.showSnackBar(`Ooops! Houve um erro ao buscar ${this.model.title.toLowerCase()} tente mais tarde!`);
            }else{
              console.log(err);
            }
          })
    }else{
      this.medcenterApiService.getServicesByName(page, this.model.type, name)
      .pipe(
        finalize(() => this.hideProgress())
      ).subscribe(pagedResponse =>{
          this.nextPage = pagedResponse.nextPage;
          this.previousPage = pagedResponse.previousPage;
          this.currentPage = pagedResponse.currentPage
          this.services = pagedResponse.results;
        }, err =>{
          if(environment.production){
            this.showSnackBar(`Ooops! Houve um erro ao buscar ${this.model.title.toLowerCase()} tente mais tarde!`);
          }else{
            console.log(err);
          }
        })
    }  
  }

  onNextButtonClick(): void{
    this.refreshServices(this.nextPage);  
  }

  onPreviousButtonClick(): void{
    this.refreshServices(this.previousPage);  
  }

  onSearchInputChange(event: any){
    this.refreshServices(this.currentPage, this.searchValue)
  }
}
