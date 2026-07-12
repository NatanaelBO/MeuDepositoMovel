import { Injectable, signal } from '@angular/core';

// Usuário fixo simulado — não há backend real neste projeto.
// Use este e-mail/senha para testar o login funcionando.
const MOCK_USER = {
  email: 'teste@mdm.com',
  password: '123456'
};

export interface RegisteredUser {
  email: string;
  password: string;
  acceptedLgpdAt: string; // data/hora do consentimento, para fins de demonstração
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // signal reativo — a Navbar (e qualquer outro componente) pode ler isso pra saber se o usuário está logado
  isLoggedIn = signal(false);
  currentUserEmail = signal<string | null>(null);

  // Usuários "cadastrados" nesta sessão (só em memória, some ao recarregar a página —
  // já que não há backend/banco de dados neste projeto de front-end)
  private registeredUsers: RegisteredUser[] = [];

  login(email: string, password: string): boolean {
    const isMockUser = email === MOCK_USER.email && password === MOCK_USER.password;
    const isRegisteredUser = this.registeredUsers.some(
      u => u.email === email && u.password === password
    );

    if (isMockUser || isRegisteredUser) {
      this.isLoggedIn.set(true);
      this.currentUserEmail.set(email);
      return true;
    }

    return false;
  }

  register(email: string, password: string, acceptedLgpd: boolean): boolean {
    if (!acceptedLgpd) {
      return false; // não permite cadastro sem consentimento LGPD
    }

    this.registeredUsers.push({
      email,
      password,
      acceptedLgpdAt: new Date().toISOString()
    });

    // já loga automaticamente após o cadastro
    this.isLoggedIn.set(true);
    this.currentUserEmail.set(email);
    return true;
  }

  logout(): void {
    this.isLoggedIn.set(false);
    this.currentUserEmail.set(null);
  }
}