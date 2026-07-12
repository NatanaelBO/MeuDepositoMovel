import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreService, Store } from '../../../core/services/store.service';

type StarType = 'full' | 'half' | 'empty';

@Component({
  selector: 'app-store-grid',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './store-grid.component.html',
  styleUrls: ['./store-grid.component.css']
})
export class StoreGridComponent {
  stores: Store[];

  constructor(private storeService: StoreService) {
    this.stores = this.storeService.getStores();
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