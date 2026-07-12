import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;  // se preenchido, mostra preço riscado + preço promocional
  imagePath?: string;       // deixe undefined até ter a imagem real
  categoryId: string;       // ex: 'alvenaria'
  storeId: string;          // ex: 'ferreira-costa'
  inStock: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly products: Product[] = [
    // ===== Ferreira Costa =====
    { id: 'fc-cimento-cp2', name: 'Cimento CP-II 50kg', price: 32.9, imagePath: 'products/fc-cimento-cp2.png', categoryId: 'alvenaria', storeId: 'ferreira-costa', inStock: true },
    { id: 'fc-tijolo-6furos', name: 'Tijolo 6 Furos (milheiro)', price: 890, imagePath: 'products/fc-tijolo-6furos.png', categoryId: 'alvenaria', storeId: 'ferreira-costa', inStock: true },
    { id: 'fc-porcelanato-60x60', name: 'Porcelanato 60x60 Acetinado (m²)', price: 54.9, discountPrice: 44.9, imagePath: 'products/fc-porcelanato-60x60.png', categoryId: 'ceramica', storeId: 'ferreira-costa', inStock: true },
    { id: 'fc-pastilha-vidro', name: 'Pastilha de Vidro Azul (placa)', price: 18.5, imagePath: 'products/fc-pastilha-vidro.png', categoryId: 'ceramica', storeId: 'ferreira-costa', inStock: true },
    { id: 'fc-tinta-acrilica', name: 'Tinta Acrílica Premium 18L Branco', price: 249.9, imagePath: 'products/fc-tinta-acrilica.png', categoryId: 'pintura', storeId: 'ferreira-costa', inStock: true },
    { id: 'fc-rolo-pintura', name: 'Rolo de Pintura Antigotas 23cm', price: 24.9, imagePath: 'products/fc-rolo-pintura.png', categoryId: 'pintura', storeId: 'ferreira-costa', inStock: true },
    { id: 'fc-furadeira', name: 'Furadeira de Impacto 750W', price: 189.9, imagePath: 'products/fc-furadeira.png', categoryId: 'ferramentas', storeId: 'ferreira-costa', inStock: true },
    { id: 'fc-jogo-chaves', name: 'Jogo de Chaves Combinadas 12 Peças', price: 89.9, imagePath: 'products/fc-jogo-chaves.png', categoryId: 'ferramentas', storeId: 'ferreira-costa', inStock: false },

    // ===== Fazendão =====
    { id: 'fz-cimento-cp2', name: 'Cimento CP-II 50kg', price: 31.5, imagePath: 'products/fz-cimento-cp2.png', categoryId: 'alvenaria', storeId: 'fazendao', inStock: true },
    { id: 'fz-bloco-concreto', name: 'Bloco de Concreto 14x19x39', price: 4.2, imagePath: 'products/fz-bloco-concreto.png', categoryId: 'alvenaria', storeId: 'fazendao', inStock: true },
    { id: 'fz-piso-ceramico', name: 'Piso Cerâmico 45x45 (m²)', price: 29.9, imagePath: 'products/fz-piso-ceramico.png', categoryId: 'ceramica', storeId: 'fazendao', inStock: true },
    { id: 'fz-rejunte', name: 'Rejunte Flexível 1kg Cinza', price: 14.9, discountPrice: 11.9, imagePath: 'products/fz-rejunte.png', categoryId: 'ceramica', storeId: 'fazendao', inStock: true },
    { id: 'fz-tinta-latex', name: 'Tinta Látex PVA 18L Branco', price: 179.9, imagePath: 'products/fz-tinta-latex.png', categoryId: 'pintura', storeId: 'fazendao', inStock: true },
    { id: 'fz-pincel-set', name: 'Kit 3 Pincéis Profissionais', price: 32.9, imagePath: 'products/fz-pincel-set.png', categoryId: 'pintura', storeId: 'fazendao', inStock: true },
    { id: 'fz-marreta', name: 'Marreta 2kg Cabo Fibra', price: 69.9, imagePath: 'products/fz-marreta.png', categoryId: 'ferramentas', storeId: 'fazendao', inStock: true },
    { id: 'fz-trena', name: 'Trena 5m Profissional', price: 29.9, imagePath: 'products/fz-trena.png', categoryId: 'ferramentas', storeId: 'fazendao', inStock: true }
  ];

  getProductsByStore(storeId: string): Product[] {
    return this.products.filter(p => p.storeId === storeId);
  }

  getProductsByStoreAndCategory(storeId: string, categoryId: string): Product[] {
    return this.products.filter(p => p.storeId === storeId && p.categoryId === categoryId);
  }
}