import { ChangeDetectionStrategy, Component, inject, Injector, signal } from '@angular/core';
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

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  login(form: FormGroup) {
    this.isLoading.set(true);

    if (form.valid) {
      // console.log(form.value);
      const loginData = toSignal<IAuthRes | any>(this._loginService.login(form.value), {
        injector: this.injector,
      });
      let timing = setInterval(() => {
        if (loginData()?.status > 299) {
          this.errorMsg.set(loginData()?.msg || null);
          this.successMsg.set(null);
          this.isLoading.set(false);
          clearInterval(timing);
          return;
        }
        if (loginData()?.access_token) {
          console.log(loginData()?.msg);
          console.log(loginData());
          this.successMsg.set('Successfully Login User');
          this.errorMsg.set(null);
          this.setUserData(loginData());
          this.isLoading.set(false);
          clearInterval(timing);
          return;
        }
      }, 500);
    }
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
