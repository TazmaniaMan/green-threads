import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [HeaderComponent,MenuComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    IonicModule
  ],exports: [HeaderComponent,MenuComponent]
})
export class ComponentsModule { }
