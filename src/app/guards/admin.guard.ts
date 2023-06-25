import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../core/services/auth/auth.service';
import { take } from 'rxjs';

export const AdminGuard: CanActivateFn = async () => {
  const AUTHORIZED_USERNAME: string = "Lee"

  const router = inject(Router)
  const authService = inject(AuthService)

  const userProfile$ = authService.getUserProfile$()

  let isAllowed = false;
  await new Promise(resolve => {
    userProfile$.pipe(take(1)).subscribe(data => {
      if (data) {
        isAllowed = (data.info["given_name"] === AUTHORIZED_USERNAME) ? true : false
        resolve(isAllowed)
      } else {
        resolve(isAllowed)
      }
    })
  })
  return true;
  // if (isAllowed) {
  //   return true
  // } else {
  //   router.navigateByUrl('/home')
  //   return false
  // }
}
