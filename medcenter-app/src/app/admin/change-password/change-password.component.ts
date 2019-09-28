import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/_core/base.component';
import { MedcenterApiService } from 'src/app/_services/medcenter-api.service';
import { MatSnackBar } from '@angular/material';
import { AdminService } from 'src/app/_services/admin.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent extends BaseComponent implements OnInit {

  changePasswordForm: FormGroup
  
  constructor(
    snackBar: MatSnackBar,
    adminService: AdminService,
    private medcenterApiService: MedcenterApiService,
    private formBuilder: FormBuilder) { 
      super(snackBar, adminService);
      this.adminService.isAdminComponent();
  }

  ngOnInit() {
    this.initChangePasswordForm();
  }
  
  initChangePasswordForm(): void {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: this.formBuilder.control('', Validators.required),
      newPassword: this.formBuilder.control('', Validators.required)
    });  
  }

  onChangePasswordButtonClick(): void{  
    const passwordRequest = {
      currentPassword: this.currentPasswordValue,
      newPassword: this.newPasswordValue
    }

    this.showProgress();

    this.medcenterApiService.putPassword(passwordRequest).pipe(
      finalize(() => {this.hideProgress()})
    ).subscribe(() => {
      this.showSnackBar('senha alterada com sucesso!');
    },err => {
      if(err.status == 401){
        this.showSnackBar('senha atual é invalida!')
      }else{
        this.showSnackBar('houve um erro ao alterar a senha!')  
      }
    })
  }

  get currentPasswordValue(): string{
    return this.changePasswordForm.controls.currentPassword.value;
  }

  get newPasswordValue(): string{
    return this.changePasswordForm.controls.newPassword.value;
  }

  hasError(formControlName: string): boolean{
    const control = this.changePasswordForm.get(formControlName);
    return control.invalid && (control.dirty || control.touched)
  }
}
