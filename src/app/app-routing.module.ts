import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { SlideComponent } from "./slide/slide.component";
import { TableComponent } from "./table/table.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./home/home.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "slide", component: SlideComponent },
  { path: "table", component: TableComponent },
  { path: "product/edit/:id", component: ProductEditComponent},
  { path: "product/:id", component: ProductDetailComponent },
  { path: "product-add", component: ProductAddComponent },
  { path: "product-list", component: ProductListComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
