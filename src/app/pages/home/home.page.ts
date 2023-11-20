import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.html'],
})
export class HomePage implements OnInit {
  products: Product[];
  searchUser: any;
  constructor(
    private productsService: ProductsService
  ) {
    this.products = [];
  }
  
  swiperSlideChanged(e: any) {
    console.log('changed: ',e);
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
}
