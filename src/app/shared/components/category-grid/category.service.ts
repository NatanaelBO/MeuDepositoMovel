import { Injectable } from '@angular/core';

export interface Category {
  name: string;
  icon: string;   // classe do Bootstrap Icons, ex: 'bi-bricks'
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // Fonte única da verdade — usada pela Navbar (dropdown) e pela CategoryGrid (Home)
  private readonly categories: Category[] = [
    { name: 'Alvenaria', icon: 'bi-bricks', link: '/produtos/alvenaria' },
    { name: 'Cerâmica', icon: 'bi-grid-3x3-gap-fill', link: '/produtos/ceramica' },
    { name: 'Pintura', icon: 'bi-paint-bucket', link: '/produtos/pintura' },
    { name: 'Ferramentas', icon: 'bi-tools', link: '/produtos/ferramentas' }
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}