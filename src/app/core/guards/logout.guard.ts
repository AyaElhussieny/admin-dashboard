import { inject, PLATFORM_ID, signal } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const logoutGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    let access_token = sessionStorage.getItem('access_token');
    if (access_token) {
      _router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
