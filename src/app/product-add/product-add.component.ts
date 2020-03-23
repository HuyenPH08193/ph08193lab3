import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../product.service";
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"]
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();
  constructor(private productService: ProductService,
   private router: Router) {}

  ngOnInit() {}
  addProduct() {
    this.productService.addProduct(this.product);
    this.router.navigate(['/table']);
  }
}
