import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const AdminGuard: CanActivateFn = () => {
  const router = inject(Router)
  let adminPassword = prompt("Admin Password:", "password")
  if (adminPassword === "password") {
    return true;
  } else {
    router.navigateByUrl("/")
    return false
  }
}
