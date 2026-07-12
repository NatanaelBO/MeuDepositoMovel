import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
import { CategoryGridComponent } from '../../shared/components/category-grid/category-grid.component';
import { StoreGridComponent } from '../../shared/components/store-grid/store-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CategoryGridComponent, StoreGridComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}