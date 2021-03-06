import { Component } from '@angular/core';
import { BaseComponent } from './_core/base.component';
import { MedcenterApiService } from './_services/medcenter-api.service';
import { MatSnackBar } from '@angular/material';
import { AdminService } from './_services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent extends BaseComponent {

  isLogged: boolean;

  constructor(
    private medcenterApiService: MedcenterApiService,
    snackBar: MatSnackBar,
    adminService: AdminService) { 
      super(snackBar, adminService);
      this.medcenterApiService.getSettings();//carrega o cache
      this.medcenterApiService.logged$.subscribe(logged => this.isLogged = logged);
  }

}
