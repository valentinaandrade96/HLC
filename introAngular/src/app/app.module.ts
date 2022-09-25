import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { PaginasModule } from './paginas/paginas.module';
 
@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
   
  ],
  imports: [
    BrowserModule,
    PaginasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
