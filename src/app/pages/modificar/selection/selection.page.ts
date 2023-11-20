import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { MessageService } from 'src/app/services/message.service';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit {
  formulario: FormGroup;
  formData: any;
  id: any;
  constructor(
    private sharedService: SharedService,
    private productsService: ProductsService ,
    private msg: MessageService,
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
    this.sharedService.getFormData().subscribe((data) => {
      this.formData = data;
      this.formulario.patchValue({
        name: this.formData.name,
        price: this.formData.price,
        description: this.formData.description,
        image: this.formData.image,
      });
    });this.id= this.formData.id
  }
  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.productsService.updateProduct(this.formulario.value,this.id);
    this.msg.presentToast("Producto modificado con éxito","success")
  }
}
