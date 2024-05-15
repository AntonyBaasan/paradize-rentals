import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '**', component: PageNotFoundComponent },
];
