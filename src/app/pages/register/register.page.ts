import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formulario = this.formBuilder.group({
    email: ['',[Validators.email,Validators.required]],
    password: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(16),Validators.pattern(/^(?=.*[A-Z])(?=.*\d).*$/)]]
  })
  constructor(
    private auth: AuthService,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
  }

  ngOnInit() {
  }
  //metodo de alerta
  async presentToast(message: string,color: string) {
    const toast = await this.toastCtrl.create({
      message,//mensaje
      color,//color del recuadro
      duration: 3000,//duracion en ms
      position: 'bottom'//posicion
    });
    toast.present();
  }
  register(){
    if (this.formulario.valid){
      const {email,password}= this.formulario.getRawValue();
      console.log(email,password);
      this.auth.register(email!,password!)
      .then(()=>{
        console.log(email,password);
        this.router.navigate(['/login']);
        this.presentToast('Registro exitoso','success')
      }).catch(error => {
        console.error(error);  // Agrega esta línea para mostrar el error en la consola
        this.presentToast('Error al registrar: ' + error.message, 'danger');
     })
    } else {
      if (this.formulario.get('email')!.hasError('email')) {
        this.presentToast('El correo electrónico es inválido', 'danger');
        this.formulario.markAllAsTouched();
      } else if (this.formulario.get('email')!.hasError('required')) {
        this.presentToast('El correo electrónico es obligatorio', 'danger');
        this.formulario.markAllAsTouched();
      } else if (this.formulario.get('password')!.hasError('required')) {
        this.presentToast('La contraseña es obligatoria', 'danger');
        this.formulario.markAllAsTouched();
      } else if (this.formulario.get('password')!.hasError('minlength')) {
        this.presentToast('La contraseña debe tener al menos 8 caracteres', 'danger');
        this.formulario.markAllAsTouched();
      } else if (this.formulario.get('password')!.hasError('maxlength')) {
        this.presentToast('La contraseña no puede tener más de 16 caracteres', 'danger');
        this.formulario.markAllAsTouched();
      } else if (this.formulario.get('password')!.hasError('pattern')) {
        this.presentToast('La contraseña debe contener al menos una letra mayúscula y al menos un número', 'danger');
        this.formulario.markAllAsTouched();
      } else {
        this.presentToast('Error desconocido', 'danger');
      }
    }
  }
}

