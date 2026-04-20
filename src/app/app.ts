import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { StorageService } from './core/services/storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('admin-dashboard');
  private _storageService = inject(StorageService);
  private _router = inject(Router);

  constructor() {
    const expireAtStr = this._storageService.getLocalStorageValue('expireAt');
    const expireAt = expireAtStr ? Number(expireAtStr) : null;

    if (expireAt && Date.now() > expireAt) {
      // expired token
      this._storageService.removeFromLocalStorage('token');
      this._storageService.removeFromLocalStorage('userData');
      this._storageService.removeFromLocalStorage('expireAt');
      this._storageService.setLocalStorageValue('rememberMe', 'false');
      this._router.navigate(['/']);
    }
  }
}
