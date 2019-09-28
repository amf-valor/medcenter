import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_core/base.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AdminService } from 'src/app/_services/admin.service';
import { MedcenterApiService } from 'src/app/_services/medcenter-api.service';
import { ServicosDialogComponent } from './servicos-dialog/servicos-dialog.component';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicoResponse } from 'src/app/servicos/servico.model';
import { PagedResponse } from 'src/app/_core/paged-response';

@Component({
  selector: 'app-servicos-admin',
  templateUrl: './servicos-admin.component.html',
  styleUrls: ['./servicos-admin.component.css']
})
export class ServicosAdminComponent extends BaseComponent implements OnInit {

  searchForm: FormGroup;
  pagedResponse: PagedResponse<ServicoResponse>;

  get hasNextPages(): boolean{
    return this.pagedResponse.nextPage > 0
  }

  get hasPreviousPages(): boolean{
    return this.pagedResponse.previousPage > 0
  }

  get hasPages(): boolean{
    return this.hasNextPages || this.hasPreviousPages;
  }

  constructor(snackBar: MatSnackBar, 
    adminService: AdminService,
    private medcenterApiService: MedcenterApiService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder) { 
      super(snackBar, adminService)
      this.adminService.isAdminComponent();
  }

  ngOnInit() {
    this.initSearchForm();
    this.refreshServices(1, "specialty");
  }
  
  initSearchForm(): void {
    this.searchForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      type: this.formBuilder.control('')
    });  
  }

  onAddButtonClick(){
    const dialogRef = this.dialog.open(ServicosDialogComponent,{
      width:'400px'
    });
    
    dialogRef.afterClosed().subscribe(servicoRequest => {
      if(servicoRequest !== undefined){
        this.showProgress();

        this.medcenterApiService.postService(servicoRequest)
          .pipe(finalize(() => this.hideProgress()))
          .subscribe(newService => {
            this.showSnackBar('cadastrado com sucesso!')
            this.refreshServices(1, newService.type, newService.name)  
            },err =>{ 
              if(!environment.production){
                console.log(err);
                this.showSnackBar('Oops! houve um problema ao registrar serviço, tente novamente mais tarde!')
              }
            }
          );
      }
    })
  }

  protected refreshServices(page: number, type:string, name?:string): void{
    this.showProgress();
    
    if(name === undefined){
      this.medcenterApiService.getServices(page, type)
        .pipe(
          finalize(() => this.hideProgress())
        ).subscribe(pagedResponse =>{
            this.pagedResponse = pagedResponse
          }, err =>{
            if(environment.production){
              this.showSnackBar(`Ooops! Houve um erro ao buscar serviços tente mais tarde!`);
            }else{
              console.log(err);
            }
          })
    }else{
      this.medcenterApiService.getServicesByName(page, type, name)
      .pipe(
        finalize(() => this.hideProgress())
      ).subscribe(pagedResponse =>{
          this.pagedResponse = pagedResponse;
        }, err =>{
          if(environment.production){
            this.showSnackBar(`Ooops! Houve um erro ao buscar serviços tente mais tarde!`);
          }else{
            console.log(err);
          }
        })
    }  
  }

  onSearchButtonClick(): void{
    this.refreshServices(1, this.typeValue, this.nameValue); 
  }

  onDeleteButtonClick(id:number): void{
    this.showProgress();

    this.medcenterApiService.deleteService(id).pipe(
      finalize(() => this.hideProgress())
    ).subscribe(() =>{
      if(this.nameValue === "" && this.typeValue ===""){
        this.refreshServices(1, "specialty");
      }
      
      this.refreshServices(this.pagedResponse.currentPage, this.typeValue, this.nameValue);
      this.showSnackBar('serviço deletado com sucesso!')  
    }, err => {
      if(environment.production){
        this.showSnackBar(`Ooops! Houve um erro ao deletar tente mais tarde!`);
      }else{
        console.log(err);
      }
    })
  }

  onNextButtonClick(): void{
    this.refreshServices(this.pagedResponse.nextPage, this.typeValue, this.nameValue);  
  }

  onPreviousButtonClick(): void{
    this.refreshServices(this.pagedResponse.previousPage, this.typeValue, this.nameValue);  
  }
  
  private get nameValue(): string{
    return this.searchForm.controls.name.value;
  }

  private get typeValue(): string{
    return this.searchForm.controls.type.value;
  }
}
