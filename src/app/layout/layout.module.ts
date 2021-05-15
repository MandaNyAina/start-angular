import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutes } from './layout.routing';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { BlogPageComponent } from '../pages/blog-page/blog-page.component';
import { RecherchePageComponent } from '../pages/recherche-page/recherche-page.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutes
  ],
  declarations: [
    LayoutComponent, 
    LayoutHeaderComponent, 
    LayoutFooterComponent,
    BlogPageComponent,
    RecherchePageComponent
  ]
})
export class LayoutModule { }
