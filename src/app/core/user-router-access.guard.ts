import { isDevMode } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, map } from "rxjs";
import { AccauntService } from "./accaunt.service";
import { StatestorageService } from "../login/statestorage.service";



export class UserRouterAccessGuard  implements CanActivate {

    constructor(private router: Router, private _snackBar: MatSnackBar, private accountService: AccauntService, private stateStorageService: StatestorageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.accountService.identity().pipe(
        map(account => {
          if (account) {
            const authorities = route.data['authorities'];
            
            if (!authorities || authorities.length === 0 || this.accountService.hasAnyAuthority(authorities)) {
              return true;
            }
  
            if (isDevMode()) {
              console.error('User has not any of required authorities: ', authorities);
            }
  
  
  
          }
          this._snackBar.open("Sizga bu bo'limda ishlashga huquq berilmagan!", 'X ', {
            duration: 4000,
            verticalPosition: 'bottom',
  
          });
          this.stateStorageService.storeUrl(state.url);
          this.router.navigate(['/login']);
          return false;
        }
  
  
        )
  
      );
    }

}