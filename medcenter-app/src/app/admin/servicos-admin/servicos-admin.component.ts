import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_core/base.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AdminService } from 'src/app/_services/admin.service';
import { MedcenterApiService } from 'src/app/_services/medcenter-api.service';
import { ServicosDialogComponent } from './servicos-dialog/servicos-dialog.component';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-servicos-admin',
  templateUrl: './servicos-admin.component.html',
  styleUrls: ['./servicos-admin.component.css']
})
export class ServicosAdminComponent extends BaseComponent implements OnInit {

  constructor(snackBar: MatSnackBar, 
    adminService: AdminService,
    private medcenterApiService: MedcenterApiService,
    private dialog: MatDialog) { 
      super(snackBar, adminService)
      this.adminService.isAdminComponent();
  }

  ngOnInit() {
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
          .subscribe(id => {
            this.showSnackBar('cadastrado com sucesso!')  
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
}
