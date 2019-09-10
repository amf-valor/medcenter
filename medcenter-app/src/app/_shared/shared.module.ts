import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
  MatButtonModule, 
  MatToolbarModule, 
  MatDialogModule, 
  MatInputModule, 
  MatSnackBarModule, 
  MatSelectModule, 
  MatIconModule, 
  MatTabsModule, 
  MatCardModule,  
  MatDatepickerModule, 
  MatProgressBarModule, 
  MatProgressSpinnerModule, 
  MatSidenavModule,
  MatListModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSidenavModule,
    FormsModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  exports:[
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSidenavModule,
    FormsModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatListModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
