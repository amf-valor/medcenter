import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MedcenterApiService } from 'src/app/_services/medcenter-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'md-sidenav-items-admin',
  templateUrl: './sidenav-items-admin.component.html',
  styleUrls: ['./sidenav-items-admin.component.css']
})
export class SidenavItemsAdminComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(
    private medcenterApiService: MedcenterApiService,
    private router: Router) { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public onLogoutClick = () => {
    this.medcenterApiService.logout();
    this.sidenavClose.emit();
    this.router.navigate(['/admin']);  
  }
}
