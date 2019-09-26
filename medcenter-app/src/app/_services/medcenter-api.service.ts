import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Contato } from '../contato/contato.model';
import { Observable, timer, of, Subject } from 'rxjs';
import { map, switchMap, shareReplay } from 'rxjs/operators';
import { PagedResponse } from '../_core/paged-response';
import { ServicoResponse } from '../servicos/servico.response';
import { Credentials } from '../admin/credentials.model';
import { Setting } from '../admin/settings/setting.model';

@Injectable({
  providedIn: 'root'
})
export class MedcenterApiService {
  
  private settingsCache$: Observable<Setting[]>;

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
    if (!this.settingsCache$) {
      this.settingsCache$ =  this.requestGetSettings().pipe(
        shareReplay(1)  
      )
    }

    return this.settingsCache$;
  }

  private requestGetSettings(): Observable<Setting[]>{
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
      .pipe(map(() => {
        return Observable.create()
      }))  
  }

  get whatsApp(): Observable<string>{
    return this.settingsCache$
      .pipe(
        map( settings => { 
          return settings.filter(setting => setting.name === "WhatsApp")[0].value; 
        })
      )
  }

  get phone(): Observable<string>{
    return this.settingsCache$
      .pipe(
        map( settings => { 
          return settings.filter(setting => setting.name === "Phone")[0].value; 
        })
      )
  }

  get cnpj(): Observable<string>{
    return this.settingsCache$
      .pipe(
        map( settings => { 
          return settings.filter(setting => setting.name === "CNPJ")[0].value; 
        })
      )
  }

  get companyName(): Observable<string>{
    return this.settingsCache$
      .pipe(
        map( settings => { 
          return settings.filter(setting => setting.name === "CompanyName")[0].value; 
        })
      )
  }

  get techinicalManager(): Observable<string>{
    return this.settingsCache$
      .pipe(
        map( settings => { 
          return settings.filter(setting => setting.name === "TechinicalManager")[0].value; 
        })
      )
  }

  get address(): Observable<string>{
    return this.settingsCache$
      .pipe(
        map( settings => { 
          return settings.filter(setting => setting.name === "Address")[0].value; 
        })
      )
  }
}
