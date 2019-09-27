import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ServicoRequest } from 'src/app/servicos/servico.model';

@Component({
  selector: 'app-servicos-dialog',
  templateUrl: './servicos-dialog.component.html',
  styleUrls: ['./servicos-dialog.component.css']
})
export class ServicosDialogComponent implements OnInit {

  serviceForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ServicosDialogComponent>) { 
      this.initServiceForm();
  }

  ngOnInit() {
  }

  private initServiceForm() : void{
    this.serviceForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      price: this.formBuilder.control('', Validators.pattern('[0-9,]+')),
      isSchedulable: this.formBuilder.control(false),
      type: this.formBuilder.control('', Validators.required)
    });  
  }

  hasError(formControlName: string): boolean{
    const control = this.serviceForm.get(formControlName);
    return control.invalid && (control.dirty || control.touched)
  }

  onSaveButtonClick(){
    const serviceRequest: ServicoRequest = {
      name: this.nameValue,
      price: this.priceValue,
      isSchedulable: this.isSchedulable,
      type: this.typeValue 
    }

    this.dialogRef.close(serviceRequest);
  }

  onCancelButtonClick(){
    this.dialogRef.close();
  }

  private get nameValue(): string{
    return this.serviceForm.controls.name.value
  }

  private get priceValue(): number{
    const value: string = this.serviceForm.controls.price.value;
    return +(value.replace(',','.'));
  }

  private get isSchedulable(): boolean{
    return this.serviceForm.controls.isSchedulable.value;
  }

  private get typeValue(): string{
    return this.serviceForm.controls.type.value;
  } 
}
