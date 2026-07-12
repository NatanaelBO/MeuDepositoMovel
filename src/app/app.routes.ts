import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { StoreComponent } from './features/store/store.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loja/:id', component: StoreComponent },

  // Rotas temporárias: as páginas reais ainda não existem,
  // então redirecionam para a Home por enquanto (evita quebrar o roteador).
  // Substitua por "component: XComponent" assim que cada página for criada.
  { path: 'login', redirectTo: '' },
  { path: 'carrinho', redirectTo: '' },
  { path: 'produtos/:categoria', redirectTo: '' },

  // Rota coringa: qualquer URL não reconhecida cai na Home,
  // em vez de quebrar o roteador com erro NG04002.
  { path: '**', redirectTo: '' }
];