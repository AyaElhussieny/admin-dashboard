import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { StorageService } from '../storage.service';
import { catchError, Observable, of, tap } from 'rxjs';
import { AuthEndPoints } from '../../Enums/auth.endpoints';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  _httpClient = inject(HttpClient);
  _storageService = inject(StorageService);
  access_token = signal<string | null>(this._storageService.getSessionStorageValue('access_token'));

  isLoggedIn = computed(() => !!this.access_token());

  refreshToken() {
    const refresh_token = signal<string | null>(
      this._storageService.getSessionStorageValue('refresh_token'),
    );
    return this._httpClient
      .post('/auth/refresh', {
        refresh_token: refresh_token(),
      })
      .pipe(
        tap((res: any) => {
          this._storageService.setSessionStorageValue('access_token', res.access_token);
        }),
      );
  }
  login(data: any): Observable<any> {
    return this._httpClient.post(`${AuthEndPoints.Login}`, data).pipe(
      catchError((error: HttpErrorResponse | any) => {
        return of({
          status: error.status,
          msg: error.error.message,
        });
      }),
    );
  }
}
