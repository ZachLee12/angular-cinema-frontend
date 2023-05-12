import { Injectable, inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../core/services/auth/auth.service';

export const AdminGuard: CanActivateFn = () => {
  const authService = inject(AuthService)
  const router = inject(Router)
  // let adminPassword = prompt("Admin Password:", "password")
  // if (adminPassword === "password") {
  //   return true;
  // } else {
  //   router.navigateByUrl("/")
  //   return false
  // }

  return true;
}
