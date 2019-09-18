import { Component, OnInit } from '@angular/core';
import { MedcenterApiService } from '../_services/medcenter-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contato } from './contato.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'md-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contactForm: FormGroup;
  isProgressVisible: boolean;

  constructor(
    private medcenterApiService: MedcenterApiService,
    private formBuilder:FormBuilder,
    private snackBar: MatSnackBar) { 
      this.isProgressVisible = false;
    }

  ngOnInit() {
    this.initContactForm();
  }

  initContactForm() {
    this.contactForm = this.formBuilder.group({
      nome: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      phone: this.formBuilder.control('', [
        Validators.required, 
        Validators.minLength(10), 
        Validators.maxLength(11),
        Validators.pattern('[0-9]+')
      ]),
      message: this.formBuilder.control('', [Validators.required])  
    });
  }

  onSendMessageButtonClick(){
    const contato: Contato ={
      from: this.nomeValue,
      email: this.emailValue,
      phone: this.phoneValue,
      message: this.messageValue
    }
    
    this.isProgressVisible = true;

    this.medcenterApiService.postContact(contato)
      .subscribe(() =>{
        this.showSnackBar('Mensagem enviada com sucesso! Retornaremos em seu e-mail ou telefone')
        this.isProgressVisible = false;
      }, err =>{
        this.showSnackBar('Houve um erro ao enviar sua mensagem, se o erro persistir tente nos ligar ou enviar um  WhatsApp')
        this.isProgressVisible = false;
      })
  }
  
  showSnackBar(message: string) {
    this.snackBar.open(message, "Ok", {
      duration: 3000,
    });
  }

  hasError(formControlName: string): boolean{
    const control = this.contactForm.get(formControlName);
    return control.invalid && (control.dirty || control.touched)
  }

  private get nomeValue(): string{
    return this.contactForm.controls.nome.value;
  }

  private get emailValue() : string{
    return this.contactForm.controls.email.value;
  }

  private get phoneValue() : string{
    return this.contactForm.controls.phone.value;
  }

  private get messageValue() : string{
    return this.contactForm.controls.message.value;
  }
}
