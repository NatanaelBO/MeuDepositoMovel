import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { StoreComponent } from './features/store/store.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './features/terms-of-use/terms-of-use.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loja/:id', component: StoreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: RegisterComponent },
  { path: 'politica-privacidade', component: PrivacyPolicyComponent },
  { path: 'termos-de-uso', component: TermsOfUseComponent },

  // Rotas temporárias: as páginas reais ainda não existem,
  // então redirecionam para a Home por enquanto (evita quebrar o roteador).
  // Substitua por "component: XComponent" assim que cada página for criada.
  { path: 'carrinho', redirectTo: '' },
  { path: 'produtos/:categoria', redirectTo: '' },

  // Rota coringa: qualquer URL não reconhecida cai na Home,
  // em vez de quebrar o roteador com erro NG04002.
  { path: '**', redirectTo: '' }
];