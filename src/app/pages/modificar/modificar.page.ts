import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  products: Product[];
  copia: Product[];
  searchUser: any;
  constructor(
    private sharedService: SharedService,
    private productsService: ProductsService
  ) {
    this.products = [];
    this.copia = [];
  }
  
  ngOnInit(): void {
    this.productsService.getProduct().subscribe(products => {
      this.products = products;
      this.searchUser = this.products;
    })
  }  
  searchCustomer(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.searchUser = this.products;
    if(text && text.trim() !=''){
      this.searchUser = this.searchUser.filter((products: any)=>{
        return (products.name.toLowerCase().indexOf(text.toLowerCase())> -1);
      })
    }else{
      this.searchUser = this.products; 
    }
  }
  clearSearch() {
    this.searchUser = this.products;
  }
  guardar(product: Product[]){
    const formData = product;
    this.sharedService.setFormData(product);
    console.log(product);
  }
}
