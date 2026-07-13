import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CartService, CartItem } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(
    public cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  getItemPrice(item: CartItem): number {
    return item.product.discountPrice ?? item.product.price;
  }

  getItemSubtotal(item: CartItem): number {
    return this.getItemPrice(item) * item.quantity;
  }

  increaseQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item.product.id, item.quantity + 1);
  }

  decreaseQuantity(item: CartItem): void {
    this.cartService.updateQuantity(item.product.id, item.quantity - 1);
  }

  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.product.id);
  }

  onCheckout(): void {
    if (!this.authService.isLoggedIn()) {
      alert('Você precisa entrar ou criar uma conta para finalizar a compra.');
      this.router.navigate(['/login']);
      return;
    }

    // Sem backend: só simula a finalização do pedido
    alert('Pedido finalizado com sucesso! (simulação — não há backend neste projeto)');
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }
}