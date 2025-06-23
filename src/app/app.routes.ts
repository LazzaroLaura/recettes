import { Routes } from '@angular/router';
import { CookiesComponent } from './cookies/cookies.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cookies',
    title: "Des cookies!",
    component: CookiesComponent,
  }
];