import { Routes } from '@angular/router';
import { StoreComponent } from './features/orders/store/store.component';
import { ArticlesComponent } from './features/admin/articles/articles.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'orders', component: StoreComponent },
  { path: '**', component: NotFoundComponent },
];
