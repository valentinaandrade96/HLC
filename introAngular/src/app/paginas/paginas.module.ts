import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    BuscarComponent, 
    InicioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BuscarComponent,
    InicioComponent
  ]
})
export class PaginasModule { }
