import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../contato/contato.model';

@Injectable({
  providedIn: 'root'
})
export class MedcenterApiService {

  constructor(private httpClient:HttpClient) { }

  postContact(contato:Contato){
    const httpHeaders = { 'Content-Type': 'application/json'}
    return this.httpClient.post(
      `${environment.MEDCENTER_API_ADDRESS}/contact`,
       JSON.stringify(contato),
       {headers: httpHeaders})    
  }
}
