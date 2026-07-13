import { Injectable, signal, computed } from '@angular/core';
import { Product } from './product.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = signal<CartItem[]>([]);
  currentStoreId = signal<string | null>(null);

  totalItems = computed(() =>
    this.items().reduce((sum, item) => sum + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this.items().reduce((sum, item) => {
      const price = item.product.discountPrice ?? item.product.price;
      return sum + price * item.quantity;
    }, 0)
  );

  addToCart(product: Product): void {
    const cartHasItemsFromOtherStore =
      this.currentStoreId() !== null && this.currentStoreId() !== product.storeId;

    if (cartHasItemsFromOtherStore) {
      const confirmed = confirm(
        'Seu carrinho tem itens de outra loja. Adicionar este produto vai limpar o carrinho atual. Deseja continuar?'
      );
      if (!confirmed) {
        return;
      }
      this.clearCart();
    }

    this.currentStoreId.set(product.storeId);

    const existingItem = this.items().find(item => item.product.id === product.id);

    if (existingItem) {
      this.updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      this.items.update(items => [...items, { product, quantity: 1 }]);
    }
  }

  updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    this.items.update(items =>
      items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }

  removeFromCart(productId: string): void {
    this.items.update(items => items.filter(item => item.product.id !== productId));

    if (this.items().length === 0) {
      this.currentStoreId.set(null);
    }
  }

  clearCart(): void {
    this.items.set([]);
    this.currentStoreId.set(null);
  }
}