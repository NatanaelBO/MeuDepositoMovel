import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
import { CategoryGridComponent } from '../../shared/components/category-grid/category-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CategoryGridComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}