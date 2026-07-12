import { Injectable } from '@angular/core';

export interface Store {
  id: string;
  name: string;
  initials: string;
  logoPath?: string;
  coverPath?: string;
  rating: number;
  categoryIds: string[];  // slugs das categorias que essa loja atende, ex: ['alvenaria', 'ceramica']
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly stores: Store[] = [
    {
      id: 'ferreira-costa',
      name: 'Ferreira Costa',
      initials: 'FC',
      logoPath: 'stores/ferreira-costa.svg',
      rating: 4.5,
      categoryIds: ['alvenaria', 'ceramica', 'pintura', 'ferramentas']
    },
    {
      id: 'fazendao',
      name: 'Fazendão',
      initials: 'FZ',
      logoPath: 'stores/fazendao.png',
      rating: 4.0,
      categoryIds: ['alvenaria', 'ceramica', 'pintura', 'ferramentas']
    }
    // Exemplo de loja futura sem todas as categorias:
    // {
    //   id: 'oliveira',
    //   name: 'Material de Construção Oliveira',
    //   initials: 'OL',
    //   rating: 4.2,
    //   categoryIds: ['alvenaria', 'pintura', 'ferramentas'] // sem 'ceramica'
    // }
  ];

  getStores(): Store[] {
    return this.stores;
  }

  getStoreById(id: string): Store | undefined {
    return this.stores.find(store => store.id === id);
  }

  // Retorna só as lojas que atendem a categoria informada
  getStoresByCategory(categoryId: string): Store[] {
    return this.stores.filter(store => store.categoryIds.includes(categoryId));
  }
}