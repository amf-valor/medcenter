import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Contato } from '../contato/contato.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PagedResponse } from '../_core/paged-response';
import { Especialidade } from '../especialidades/especialidade.model';

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

  getSpecialties(page: number): Observable<PagedResponse<Especialidade>>{
    const httpHeaders = { 'Content-Type': 'application/json'}
    return this.httpClient.get<PagedResponse<Especialidade>>(
      `${environment.MEDCENTER_API_ADDRESS}/specialty?page=${page}`,
       {headers: httpHeaders})
  }
}
