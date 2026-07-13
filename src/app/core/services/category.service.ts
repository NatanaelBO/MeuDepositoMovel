import { Injectable } from '@angular/core';

export interface Category {
  id: string;     // slug usado para filtro, ex: 'ceramica'
  name: string;
  icon: string;    // classe do Bootstrap Icons, ex: 'bi-bricks'
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // Fonte única da verdade — usada pela Navbar (dropdown) e pela CategoryGrid (Home)
  private readonly categories: Category[] = [
    { id: 'alvenaria', name: 'Alvenaria', icon: 'bi-bricks', link: '/produtos/alvenaria' },
    { id: 'ceramica', name: 'Cerâmica', icon: 'bi-grid-3x3-gap-fill', link: '/produtos/ceramica' },
    { id: 'pintura', name: 'Pintura', icon: 'bi-paint-bucket', link: '/produtos/pintura' },
    { id: 'ferramentas', name: 'Ferramentas', icon: 'bi-tools', link: '/produtos/ferramentas' }
  ];

  getCategories(): Category[] {
    return this.categories;
  }
}
