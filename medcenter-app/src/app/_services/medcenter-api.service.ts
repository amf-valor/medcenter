import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Contato } from '../contato/contato.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PagedResponse } from '../_core/paged-response';
import { ServicoResponse } from '../servicos/servico.response';
import { Credentials } from '../admin/credentials.model';
import { Setting } from '../admin/settings/setting.model';

@Injectable({
  providedIn: 'root'
})
export class MedcenterApiService {
  
  constructor(private httpClient:HttpClient) { }

  postContact(contato:Contato): Observable<void>{
    const httpHeaders = { 'Content-Type': 'application/json'}
    return this.httpClient.post(
      `${environment.MEDCENTER_API_ADDRESS}/contact`,
       JSON.stringify(contato),
       {headers: httpHeaders})
      .pipe(map(() => {return Observable.create()}))    
  }

  getServices(page: number, type:string): Observable<PagedResponse<ServicoResponse>>{
    const httpHeaders = { 'Content-Type': 'application/json'}
    return this.httpClient.get<PagedResponse<ServicoResponse>>(
      `${environment.MEDCENTER_API_ADDRESS}/services?page=${page}&type=${type}`,
       {headers: httpHeaders})
  }

  getServicesByName(page: number, type:string, name:string): Observable<PagedResponse<ServicoResponse>>{
    const httpHeaders = { 'Content-Type': 'application/json'}
    return this.httpClient.get<PagedResponse<ServicoResponse>>(
      `${environment.MEDCENTER_API_ADDRESS}/services?page=${page}&type=${type}&name=${name}`,
       {headers: httpHeaders})
  }

  postLogin(credentials: Credentials): Observable<void>{
    const httpHeaders = { 'Content-Type': 'application/json'}
    return this.httpClient.post(
      `${environment.MEDCENTER_API_ADDRESS}/users/authenticate`,
       JSON.stringify(credentials),
       {headers: httpHeaders})
      .pipe(map(() => {return Observable.create()}))  
  }

  getSettings(): Observable<Setting[]>{
    const httpHeaders = { 'Content-Type': 'application/json'}
    return this.httpClient.get<Setting[]>(
      `${environment.MEDCENTER_API_ADDRESS}/settings`,
       {headers: httpHeaders}) 
  }

  putSetting(setting: Setting): Observable<void>{
    const httpHeaders = { 'Content-Type': 'application/json'}
    return this.httpClient.put(
      `${environment.MEDCENTER_API_ADDRESS}/settings`,
       JSON.stringify(setting),
       {headers: httpHeaders})
      .pipe(map(() => {return Observable.create()}))  
  }
}
