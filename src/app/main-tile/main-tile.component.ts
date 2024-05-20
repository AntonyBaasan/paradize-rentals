import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RealEstateProperty } from '../models/RealEstateProperty';

@Component({
  selector: 'app-main-tile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-tile.component.html',
  styleUrl: './main-tile.component.scss'
})
export class MainTileComponent {
  @Input() item: RealEstateProperty | undefined;

  constructor(private router: Router) {
  }

  onClick() {
    if (this.item) {
      this.router.navigate(['/detail', this.item.id]);
      // alert('clicked! ' + this.item?.id);
    }
  }
}
