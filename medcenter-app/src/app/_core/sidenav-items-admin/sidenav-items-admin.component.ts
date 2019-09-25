import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'md-sidenav-items-admin',
  templateUrl: './sidenav-items-admin.component.html',
  styleUrls: ['./sidenav-items-admin.component.css']
})
export class SidenavItemsAdminComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
