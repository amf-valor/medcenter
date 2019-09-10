import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'md-sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrls: ['./sidenav-items.component.css']
})
export class SidenavItemsComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
