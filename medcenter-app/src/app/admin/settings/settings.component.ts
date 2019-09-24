import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_core/base.component';
import { MatSnackBar } from '@angular/material';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'md-admin-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent extends BaseComponent implements OnInit {

  constructor(snackBar: MatSnackBar, adminService: AdminService) { 
    super(snackBar, adminService)
    this.adminService.isAdminComponent();
  }

  ngOnInit() {
  }

}
