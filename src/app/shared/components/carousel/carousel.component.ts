import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface CarouselSlide {
  badge: string;
  title: string;
  subtitle: string;
  imagePath: string;   // ex: 'assets/banners/cimento-oferta.jpg'
  ctaLabel: string;
  ctaLink: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  slides: CarouselSlide[] = [
    {
      badge: 'OFERTA DA SEMANA',
      title: 'CIMENTO CP-II ATÉ 20% OFF',
      subtitle: 'Em sacos de 50kg, entrega em até 48h para toda a região.',
      imagePath: 'banners/cimento-oferta.png',
      ctaLabel: 'VER OFERTA',
      ctaLink: '/produtos/cimento'
    },
    {
      badge: 'LANÇAMENTO',
      title: 'LINHA COMPLETA DE FERRAGENS',
      subtitle: 'Tudo o que você precisa para sua obra em um só lugar.',
      imagePath: 'banners/ferragens.png',
      ctaLabel: 'CONFERIR',
      ctaLink: '/produtos/ferragens'
    },
    {
      badge: 'FRETE GRÁTIS',
      title: 'COMPRAS ACIMA DE R$ 500',
      subtitle: 'Válido para toda a região metropolitana.',
      imagePath: 'banners/frete-gratis.png',
      ctaLabel: 'APROVEITAR',
      ctaLink: '/produtos'
    }
  ];

  // Intervalo do autoplay em ms
  autoplayInterval = 5000;
}
