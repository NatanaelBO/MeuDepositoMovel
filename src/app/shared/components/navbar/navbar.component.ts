import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm = '';

  constructor(
    public authService: AuthService,
    public cartService: CartService
  ) {}

  onSearch(): void {
    if (!this.searchTerm.trim()) {
      return;
    }
    // TODO: navegar para /produtos?busca=searchTerm
    console.log('Buscando por:', this.searchTerm);
  }

  onLogout(): void {
    this.authService.logout();
  }
}