import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../_core/base.component';
import { MatSnackBar } from '@angular/material';
import { AdminService } from '../_services/admin.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MedcenterApiService } from '../_services/medcenter-api.service';
import { Credentials } from './credentials.model';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent extends BaseComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(snackBar: MatSnackBar, 
    adminService: AdminService,
    private formBuilder:FormBuilder,
    private medcenterApiService: MedcenterApiService,
    private router: Router) { 
      super(snackBar, adminService);
      adminService.isAdminComponent();
  }

  ngOnInit() {
    this.initLoginForm();  
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      login: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required)
    });
  }

  hasError(formControlName: string): boolean{
    const control = this.loginForm.get(formControlName);
    return control.invalid && (control.dirty || control.touched)
  }

  onLoginButtonClick(): void{
    const credentials: Credentials ={
      login: this.loginValue,
      password: this.passwordValue
    }
    
    this.showProgress();

    this.medcenterApiService.postLogin(credentials)
    .pipe(
      finalize(() => this.hideProgress())
    )
    .subscribe(() => {
      this.router.navigate(['./admin/settings']);
    }, err => {
      if(err.status == 401){
        this.showSnackBar('usuário ou senha invalidos!')
      }else{
        this.showSnackBar("Oops! houve um erro ao fazer login tente novamente mais tarde!")
      }
    })  
  }

  private get loginValue(): string{
    return this.loginForm.controls.login.value;
  }

  private get passwordValue() : string{
    return this.loginForm.controls.password.value;
  }

}
