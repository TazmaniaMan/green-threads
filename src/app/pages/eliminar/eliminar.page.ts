import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {
  products: Product[];
  searchUser: any;
  constructor(
    private productsService: ProductsService,
    private msg: MessageService
  ) {
    this.products = [];
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
  borrar(product: Product){
    this.productsService.deleteProduct(product);
    this.msg.presentToast("Producto eliminado","success");
  }
}
