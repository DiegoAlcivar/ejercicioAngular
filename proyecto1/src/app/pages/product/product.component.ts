import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/Modules/product.modul';
import { ProductHttpService } from 'src/app/services/productHttp.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  products:ProductModel [] = [];
  constructor(private productHttpService: ProductHttpService) {
    //* de esta manera cominicaoms el componente con el servicio
  }

  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.updateProduct();
    //this.deleteProduct();
    //this.createProduct()
  }

  getProducts() {
    this.productHttpService.getAll().subscribe((response) => {
      console.log(response);
    });
  }

  getProduct() {
    this.productHttpService.getOne(2).subscribe((response) => {
      console.log(response);
    });
  }

  createProduct() {
    const data = {
      title: 'Creado hola',
      price: 20,
      description: 'Crear saludo',
      categoryId: 1,
      images: ['https://creado'],
    };
    this.productHttpService.store(data).subscribe((response) => {
      console.log(response);
    });
  }

  updateProduct() {
    const data = {
      title: 'actualizado',
      price: 20,
      description: 'Actualizado saludo',
      categoryId: 1,
      images: ['https://actualizado'],
    };
    this.productHttpService.update(data, 2).subscribe((response) => {
      console.log(response);
    });
  }

  deleteProduct() {
    this.productHttpService.destroy(2).subscribe((response: any) => {
      console.log(response);
    });
  }
}
