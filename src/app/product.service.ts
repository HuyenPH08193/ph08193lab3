import { Injectable } from "@angular/core";
import { Data } from "./MockData";
import { Product } from "./Product";
@Injectable()
export class ProductService {
  products = Data;
  selected: Product;

  constructor() {}
  getProducts() {
    // Lay danh sach san pham
    return this.products;
  }
  getProduct(id) {
    return this.products.find(product => product.id == id);
    
  }
  removeProduct(id) {
    // Xoa san pham
    return (this.products = this.products.filter(product => product.id != id));
  }
  addProduct(product) {
    // them san pham
    let newObj = { id: 16, ...product }; //cu phap spread
    this.products.push(product);
    
  }
  updateProduct(product){
    return this.products.map( item => item.id === product.id ? product : item);
  }
  editProduct() {
   
  }
}
