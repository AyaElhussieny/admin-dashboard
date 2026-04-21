import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Injector,
  signal,
} from '@angular/core';
import { MainBtnComponent } from '../../../shared/UI/main-btn/main-btn.component';
import { InputSharedComponent } from '../../../shared/UI/input-shared/input-shared.component';
import { PasswordSharedComponent } from '../../../shared/UI/password-shared/password-shared.component';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MessageModule } from 'primeng/message';
import { Message } from 'primeng/message';
import { IAuthRes } from '../../models/authRes.model';
import { LoginService } from '../../services/login/login';
@Component({
  selector: 'app-login',
  imports: [
    MainBtnComponent,
    InputSharedComponent,
    PasswordSharedComponent,
    RouterLink,
    ReactiveFormsModule,
    MessageModule,
    Message,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  rememberMeEnabled = signal(false);
  errorMsg = signal<string | null>(null);
  successMsg = signal<string | null>(null);
  isLoading = signal<boolean>(false);

  injector = inject(Injector);
  private _loginService = inject(LoginService);
  private _router = inject(Router);
  private _storageService = inject(StorageService);
  loginResponse = signal<IAuthRes | null>(null);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  handleLoginEffect = effect(() => {
    const res = this.loginResponse();

    if (!res) return;

    this.isLoading.set(false);

    if ((res as any)?.status > 299) {
      this.errorMsg.set((res as any)?.msg || 'Login failed');
      this.successMsg.set(null);
      return;
    }

    if (res.access_token) {
      this.successMsg.set('Successfully Login User');
      this.errorMsg.set(null);
      this.setUserData(res);
    }
  });

  login(form: FormGroup) {
    if (form.invalid) return;

    this.isLoading.set(true);

    const responseSignal = toSignal(this._loginService.login(form.value), {
      injector: this.injector,
    });

    effect(
      () => {
        const data = responseSignal();
        if (data) {
          this.loginResponse.set(data);
        }
      },
      { injector: this.injector },
    );
  }

  setUserData(data: IAuthRes | undefined) {
    if (data) {
      this._storageService.setSessionStorageValue('access_token', data.access_token);
      this._storageService.setSessionStorageValue('refresh_token', data.refresh_token);
      if (this.rememberMeEnabled() == true) {
        const expireAt = Date.now() + 30 * 24 * 60 * 60 * 1000;
        this._storageService.setLocalStorageValue('rememberMe', 'true');
        this._storageService.setLocalStorageValue('expireAt', expireAt.toString());
        this._storageService.setSessionStorageValue('access_token', data.access_token);
        this._storageService.setSessionStorageValue('refresh_token', data.refresh_token);
      }
      this._router.navigate(['/']);
    }
  }

  remeberMeToggle() {
    this.rememberMeEnabled.update((value) => !value);
  }
}
