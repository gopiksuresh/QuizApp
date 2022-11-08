import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }
  
  canActivate(): boolean{

    let isActive = this.tokenStorageService.getToken() != null;

    if(!isActive){
      this.router.navigateByUrl('/login');
    }
    
    return isActive;
  }
  
}
