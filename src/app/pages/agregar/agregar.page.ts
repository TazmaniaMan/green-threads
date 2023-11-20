import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  formulario: FormGroup;
  constructor(
    private productsService: ProductsService,
    private msg: MessageService
    ) 
    { 
      this.formulario = new FormGroup({
        name: new FormControl(),
        price: new FormControl(),
        description: new FormControl(),
        image: new FormControl()
      })
  }
  
  ngOnInit() {
  }
  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.productsService.addProduct(this.formulario.value);
    this.msg.presentToast("Producto agregado con éxito","success")
  }
}
