import { inject, PLATFORM_ID, signal } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const loginGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let platformId = inject(PLATFORM_ID);
  if (isPlatformBrowser(platformId)) {
    let access_token = sessionStorage.getItem('access_token');
    if (access_token) {
      return true;
    } else {
      _router.navigate(['/login']);
      return false;
    }
  } else {
    return true;
  }
};
