import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MedcenterApiService } from './medcenter-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  /**
   *
   */
  constructor(
    private medcenterApiService: MedcenterApiService,
    private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.medcenterApiService.isLogged) {
        return true;
      }
      
      this.router.navigate(['/admin']);
      return false;
  }
  
}
