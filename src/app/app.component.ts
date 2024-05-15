import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { sample1 } from './data1';
import { MainTileComponent } from './main-tile/main-tile.component';
import { UtilsService } from './services/utils.service';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatGridListModule,
    MainTileComponent,
    DetailComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [UtilsService]
})
export class AppComponent {
  title = 'paradize-rentals';
  data = sample1;
  constructor(utilsService: UtilsService) {
    this.data = this.data.map(d => {
      d.id = utilsService.generateUID();
      return d;
    });
  }
}
