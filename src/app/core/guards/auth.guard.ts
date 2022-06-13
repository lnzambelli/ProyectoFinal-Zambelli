import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) { }

  canActivate(): boolean {
    if (!(sessionStorage.getItem('usuario')==undefined )) {
      this.router.navigate(['personal']);
      return false;
    }

    return true;
  }
  
}
