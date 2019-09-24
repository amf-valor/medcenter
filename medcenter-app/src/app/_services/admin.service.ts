import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminComponentSubject = new Subject<boolean>();
  adminComponent = this.adminComponentSubject.asObservable();
  
  constructor() { 
    
  }

  isAdminComponent(){
    this.adminComponentSubject.next(true);
  }

  isNotAdminComponent(){
    this.adminComponentSubject.next(false);
  }
}
