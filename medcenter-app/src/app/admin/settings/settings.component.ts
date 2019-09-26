import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_core/base.component';
import { MatSnackBar } from '@angular/material';
import { AdminService } from 'src/app/_services/admin.service';
import { MedcenterApiService } from 'src/app/_services/medcenter-api.service';
import { FormControl, Validators } from '@angular/forms';
import { Setting } from './setting.model';
import { environment } from 'src/environments/environment';
import { masks } from 'src/app/_shared/masks';

@Component({
  selector: 'md-admin-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent extends BaseComponent implements OnInit {

  whatsAppControl: FormControl;
  phoneControl: FormControl;
  addressControl: FormControl;
  cnpjControl: FormControl;
  companyNameControl: FormControl;
  techinicalManagerControl: FormControl;

  readonly CNPJ_MASK = masks.CNPJ;

  constructor(snackBar: MatSnackBar, 
    adminService: AdminService,
    private medcenterApiService: MedcenterApiService) { 
    super(snackBar, adminService)
    this.adminService.isAdminComponent();
    this.initControls();
  }

  private initControls(){
    this.whatsAppControl = new FormControl('');
    this.phoneControl = new FormControl('');
    this.addressControl = new FormControl('');
    this.cnpjControl = new FormControl('');
    this.companyNameControl = new FormControl('');
    this.techinicalManagerControl = new FormControl('');
  }

  ngOnInit() {
    this.medcenterApiService.getSettings()
      .subscribe(settings => {
        this.whatsAppControl.setValue(settings.filter( f => f.name =="WhatsApp")[0].value);
        this.phoneControl.setValue(settings.filter( f => f.name =="Phone")[0].value);
        this.addressControl.setValue(settings.filter( f => f.name =="Address")[0].value);
        this.cnpjControl.setValue(settings.filter( f => f.name =="CNPJ")[0].value);
        this.companyNameControl.setValue(settings.filter( f => f.name =="CompanyName")[0].value);
        this.techinicalManagerControl.setValue(settings.filter( f => f.name =="TechinicalManager")[0].value);
      })
  }

  hasError(control: FormControl): boolean{
    return control.invalid && (control.dirty || control.touched)
  }

  onInputFocusout(control:FormControl, settingName:string): void{
    const hasError = this.hasError(control);
    
    if(hasError){
      return;
    }

    const newSetting: Setting = {
      name: settingName,
      value: control.value
    }

    this.medcenterApiService.putSetting(newSetting)
      .subscribe(() => {
        this.showSnackBar(`${settingName} foi atualizado com sucesso!`)
      },
      err => {
        if(!environment.production){
          console.log(err)
        }

        this.showSnackBar(`Houve um erro ao atualiza a configuração ${settingName}`)
      })
  }
}
