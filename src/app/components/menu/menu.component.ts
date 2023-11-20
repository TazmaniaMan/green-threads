
import { Component, OnInit ,Input} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  @Input() titulo: string= '';
  componentes: Componente[]=[
    {
      icon:'home-outline',
      name:'Home',
      redirecTo:'/home'
    },
    {
      icon:'person-outline',
      name:'Nosotros',
      redirecTo:'/nosotros'
    },
    {
      icon:'add-circle-outline',
      name:'Agregar producto',
      redirecTo:'/agregar'
    },
    {
      icon:'reader-outline',
      name:'Modificar producto',
      redirecTo:'/modificar'
    },
    {
      icon:'trash-outline',
      name:'Eliminar producto',
      redirecTo:'/eliminar'
    }
  ]
  constructor(private menuController: MenuController,
    private auth: AuthService,
    private toastCtrl: ToastController){ }
  ngOnInit() {}
  cerrar(){
    this.menuController.close();
  }
  cerrarSesion(){
    this.presentToast('Sesión cerrada con éxito','success')
    this.auth.logout();
  }
  async presentToast(message: string,color: string) {
    const toast = await this.toastCtrl.create({
      message,//mensaje
      color,//color del recuadro
      duration: 3000,//duracion en ms
      position: 'bottom'//posicion
    });
    toast.present();
  }
}interface Componente {
  icon: string;
  name:string;
  redirecTo:string;
}