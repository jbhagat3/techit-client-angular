import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RemoteDataService } from '../../services/remote-data.service';

@Injectable()
export class CheckLogoutGuard implements CanActivate {
  constructor(private router: Router,  private dataService: RemoteDataService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let token = localStorage.getItem("token"),
      exp = parseInt(localStorage.getItem("exp"))
      if(token){
        this.router.navigateByUrl('home');
        return false
      }

      if(exp<Math.floor(Date.now() / 1000)){
				localStorage.removeItem("token")
				localStorage.removeItem("exp")
				localStorage.removeItem("userId")
			}
      return true
  }
}
