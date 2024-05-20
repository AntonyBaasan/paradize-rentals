import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'property/:id', component: DetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
