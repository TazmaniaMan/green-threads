import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProtectionGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.authService.isLoggedIn()
      .then((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          return true; // Usuario autenticado, permite el acceso a la ruta
        } else {
          this.router.navigate(['/login']); // Redirige a la página de inicio de sesión si el usuario no está autenticado
          return false;
        }
      });
  }
}
