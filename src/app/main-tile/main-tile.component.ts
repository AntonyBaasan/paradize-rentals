import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-tile',
  standalone: true,
  imports: [],
  templateUrl: './main-tile.component.html',
  styleUrl: './main-tile.component.scss'
})
export class MainTileComponent {
  @Input() data: any;
}
