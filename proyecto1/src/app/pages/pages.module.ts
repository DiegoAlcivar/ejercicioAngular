import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './product/form/form.component';
import { ListComponent } from './product/list/list.component';

@NgModule({
  declarations: [DashboardComponent, CatalogueComponent, ProductComponent, FormComponent, ListComponent],
  exports: [DashboardComponent, CatalogueComponent, ProductComponent],
  imports: [CommonModule],

})
export class PagesModule { }
