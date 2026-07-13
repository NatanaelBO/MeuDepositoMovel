import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// O Bootstrap JS é carregado globalmente via <script> (angular.json), não como módulo ES —
// por isso declaramos a variável global "bootstrap" aqui para o TypeScript não reclamar.
declare var bootstrap: any;

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
export class CarouselComponent implements AfterViewInit {
  @ViewChild('carouselElement') carouselElementRef!: ElementRef<HTMLElement>;

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

  ngAfterViewInit(): void {
    // Inicializa o carrossel manualmente — o Bootstrap JS faz sua auto-inicialização
    // uma única vez, no carregamento da página. Como o carrossel é renderizado pelo
    // Angular (SPA), ele muitas vezes ainda não existe nesse momento, então o
    // autoplay não "pega" sozinho. Criar a instância aqui garante que funcione.
    new bootstrap.Carousel(this.carouselElementRef.nativeElement, {
      interval: this.autoplayInterval,
      ride: 'carousel',
      wrap: true,
      touch: true,
      pause: false
    });
  }
}