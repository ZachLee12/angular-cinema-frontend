import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../core/services/auth/auth.service';

export const AdminGuard: CanActivateFn = async () => {
  const AUTHORIZED_USERNAME: string = "Lee"

  const router = inject(Router)
  const authService = inject(AuthService)
  const userProfileObservable = authService.getUserProfileObservable()
  let isAllowed = false;

  await new Promise(resolve => {
    userProfileObservable.subscribe(data => {

      isAllowed = (data.info["given_name"] === AUTHORIZED_USERNAME) ? true : false
      resolve(isAllowed)
    })
  })

  if (isAllowed) {
    return true
  } else {
    router.navigateByUrl('/')
    return false
  }
}
