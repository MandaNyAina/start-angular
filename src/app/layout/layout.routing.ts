import { Routes, RouterModule } from '@angular/router';
import { RecherchePageComponent } from '../pages/recherche-page/recherche-page.component';

const routes: Routes = [
  { 
    path: '',
    component: RecherchePageComponent
  },
];

export const LayoutRoutes = RouterModule.forChild(routes);
