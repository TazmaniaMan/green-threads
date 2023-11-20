import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    // Recuperar datos del localStorage //
    const storedUserData = localStorage.getItem('userData');
    // LOCALSTORAGE NO BORRAR PORFAVOR //

    // Verificar si hay datos almacenados
    if (storedUserData) {
      // Convertir la cadena JSON almacenada en un objeto
      const userData = JSON.parse(storedUserData);

      // Acceder al email y contraseña almacenados
      const email = userData.email;
      const password = userData.password;

      // Puedes hacer lo que necesites con el email y la contraseña aquí
      console.log('Email almacenado:', email);
      console.log('Contraseña almacenada:', password);
    }
  }


}
