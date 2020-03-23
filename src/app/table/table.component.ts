import { Component, OnInit } from '@angular/core';
import{Data} from '../MockData';
import{Product} from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products: Product[];
  selected: Product;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

showDetail(product){
    this.selected = product;
    console.log(this.selected);
  }
products=Data;
delete(id){
  this.products=this.products.filter(Product=>Product.id !=id);
}
}