import { Injectable, inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/services/auth/auth.service';

export const AdminGuard: CanActivateFn = () => {
  // your  logic goes here
  return inject(AuthService).getRoutePermission()
}
