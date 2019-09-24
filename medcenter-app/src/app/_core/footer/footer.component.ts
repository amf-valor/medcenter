import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';
import { MatSnackBar } from '@angular/material';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'md-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
