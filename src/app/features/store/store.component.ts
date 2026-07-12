import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StoreService, Store } from '../../core/services/store.service';
import { CategoryService, Category } from '../../core/services/category.service';
import { ProductService, Product } from '../../core/services/product.service';

type StarType = 'full' | 'half' | 'empty';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  store: Store | undefined;
  storeCategories: Category[] = []; // só as categorias que ESSA loja atende
  products: Product[] = [];

  activeCategoryId: string | null = null; // null = "Todos"

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const storeId = this.route.snapshot.paramMap.get('id');
    if (!storeId) {
      return;
    }

    this.store = this.storeService.getStoreById(storeId);
    if (!this.store) {
      return;
    }

    // Filtra a lista completa de categorias, mantendo só as que essa loja atende
    const allCategories = this.categoryService.getCategories();
    this.storeCategories = allCategories.filter(c => this.store!.categoryIds.includes(c.id));

    this.loadProducts();
  }

  selectCategory(categoryId: string | null): void {
    this.activeCategoryId = categoryId;
    this.loadProducts();
  }

  private loadProducts(): void {
    if (!this.store) {
      return;
    }

    if (this.activeCategoryId) {
      this.products = this.productService.getProductsByStoreAndCategory(this.store.id, this.activeCategoryId);
    } else {
      this.products = this.productService.getProductsByStore(this.store.id);
    }
  }

  getStars(rating: number): StarType[] {
    const stars: StarType[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push('full');
      } else if (i === fullStars && hasHalfStar) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }
    return stars;
  }

  getStarIcon(star: StarType): string {
    switch (star) {
      case 'full': return 'bi-star-fill';
      case 'half': return 'bi-star-half';
      case 'empty': return 'bi-star';
    }
  }
}