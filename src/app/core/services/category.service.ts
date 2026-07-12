import { Injectable } from '@angular/core';

export interface Store {
  id: string;
  name: string;
  initials: string;     // usado como placeholder do logo, ex: 'FC'
  logoPath?: string;     // caminho da logo real, ex: 'assets/stores/ferreira-costa.png' — deixe undefined até ter a imagem
  coverPath?: string;    // imagem de capa do card — mesma lógica do logo
  rating: number;        // 0 a 5, ex: 4.5
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
      rating: 4.5
    },
    {
      id: 'fazendao',
      name: 'Fazendão',
      initials: 'FZ',
      logoPath: 'stores/fazendao.png',
      rating: 4.0
    }
  ];

  getStores(): Store[] {
    return this.stores;
  }

  getStoreById(id: string): Store | undefined {
    return this.stores.find(store => store.id === id);
  }
}