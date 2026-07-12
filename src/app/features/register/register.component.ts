import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';
  acceptedLgpd = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.errorMessage = '';

    if (!this.acceptedLgpd) {
      this.errorMessage = 'É necessário aceitar os Termos e a Política de Privacidade para continuar.';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'A senha precisa ter no mínimo 6 caracteres.';
      return;
    }

    const success = this.authService.register(this.email, this.password, this.acceptedLgpd);

    if (success) {
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Não foi possível concluir o cadastro.';
    }
  }
}