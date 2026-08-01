import { Routes } from '@angular/router';
import { CookiesComponent } from './cookies/cookies.component';
import { HomeComponent } from './home/home.component';
import { ChocolateCakeComponent } from './chocolate-cake/chocolate-cake.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cookies',
    title: "Des cookies!",
    component: CookiesComponent,
  },
  {
    path: 'gateau-chocolat',
    title: "Un gâteau au chocolat plein de beurre !",
    component: ChocolateCakeComponent,
  }
];