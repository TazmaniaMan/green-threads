import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form = this.formBuilder.group({
    email: ['',[Validators.required]],
    password: ['',[Validators.required]]
  })
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }
  async presentToast(message: string,color: string) {
    const toast = await this.toastCtrl.create({
      message,//mensaje
      color,//color del recuadro
      duration: 3000,//duracion en ms
      position: 'bottom'//posicion
    });
    toast.present();
  }
  ngOnInit() {
  }
  login(){
    if (this.form.valid){
      const {email,password}= this.form.getRawValue();
      //Localstorage//
      const userData = { email, password };
      localStorage.setItem('userData', JSON.stringify(userData));
      //-----------//
      this.auth.login(email!,password!)
      .then(()=>{
        this.form.reset();
        this.presentToast('Sesión iniciada con exito', 'success');
        this.router.navigate(['/home'])
      }).catch(error=>{
        this.presentToast('Credenciales no válidas', 'danger');
      })
    }else{
      this.presentToast('Ingrese credenciales', 'danger');
    }
  }      
}

