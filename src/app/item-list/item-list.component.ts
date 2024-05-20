import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MainTileComponent } from '../main-tile/main-tile.component';
import { RealEstateProperty } from '../models/RealEstateProperty';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [MainTileComponent, MatGridListModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  data: RealEstateProperty[];

  constructor(propertyService: PropertyService) {
    this.data = propertyService.getAll();
  }
}
