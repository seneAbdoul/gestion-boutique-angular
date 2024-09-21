import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Credentials } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials: Credentials = this.loginForm.value;
    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.router.navigate(['/boutique/article']);  
      },
      error: (error) => {
        this.loginError = error.error?.message || 'Erreur de connexion';
      }
    });
  }
}
