import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../Modules/product.modul';

@Injectable({
  providedIn: 'root',
})

//* El servicio realiza la Peticiòn y luego de vuelve la respuesta.
//? Todos los componentes se comunican con una solo servicio.

export class ProductHttpService {
  constructor(private httpClient: HttpClient) {}

  readonly API_URL: string = 'http://api.escuelajs.co/api/v1/products';

  //*Consultar productos
  getAll() {
    return this.httpClient.get(this.API_URL);
  }
  //*Consultar productos por ID
  getOne(id: ProductModel['id']) {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get(url);
  }
  //*Crear Producto
  store(product: CreateProductDto) {
    return this.httpClient.post(this.API_URL, product);
  }
  //*Actualizar Producto
  update(product: UpdateProductDto, id: ProductModel['id']) {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put(url, product);
  }
  //*Eliminar Producto
  destroy(id: ProductModel['id']) {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete(url);
  }

}
