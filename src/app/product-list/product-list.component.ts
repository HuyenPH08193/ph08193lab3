import { Component, OnInit } from '@angular/core';
import{Product} from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) { }
 
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

showDetail(Product){
  this.products = this.productService.getProduct(Product);
}
delete(id){
  this.products = this.productService.removeProduct(id);
}

}