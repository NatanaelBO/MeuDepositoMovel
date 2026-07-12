import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryService, Category } from '../../../core/services/category.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartItemCount = 0; // TODO: conectar ao CartService

  categories: Category[];

  searchTerm = '';

  constructor(
    private categoryService: CategoryService,
    public authService: AuthService
  ) {
    this.categories = this.categoryService.getCategories();
  }

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