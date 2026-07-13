import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { StoreService, Store } from '../../../core/services/store.service';
import { CategoryService, Category } from '../../../core/services/category.service';

type StarType = 'full' | 'half' | 'empty';

@Component({
  selector: 'app-store-grid',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './store-grid.component.html',
  styleUrls: ['./store-grid.component.css']
})
export class StoreGridComponent implements OnInit {
  allStores: Store[];
  stores: Store[]; // lista exibida (filtrada ou não)

  activeCategoryId: string | null = null;
  activeCategoryName: string | null = null;

  constructor(
    private storeService: StoreService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.allStores = this.storeService.getStores();
    this.stores = this.allStores;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const categoriaId = params['categoria'] || null;
      this.applyFilter(categoriaId);
    });
  }

  private applyFilter(categoryId: string | null): void {
    this.activeCategoryId = categoryId;

    if (!categoryId) {
      this.stores = this.allStores;
      this.activeCategoryName = null;
      return;
    }

    this.stores = this.storeService.getStoresByCategory(categoryId);

    const category: Category | undefined = this.categoryService
      .getCategories()
      .find(c => c.id === categoryId);
    this.activeCategoryName = category ? category.name : categoryId;
  }

  clearFilter(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {}
    });
  }

  // Transforma um número (ex: 4.5) em 5 estrelas (cheia/meia/vazia) para exibir no template
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