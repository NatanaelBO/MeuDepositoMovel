import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartItemCount = 0; // TODO: conectar ao CartService
  isLoggedIn = false; // TODO: conectar ao AuthService

  categories: string[] = [
    'Cimento e argamassa',
    'Tijolos e blocos',
    'Ferragens',
    'Tintas',
    'Hidráulica',
    'Elétrica'
  ];

  searchTerm = '';

  onSearch(): void {
    if (!this.searchTerm.trim()) {
      return;
    }
    // TODO: navegar para /produtos?busca=searchTerm
    console.log('Buscando por:', this.searchTerm);
  }
}