import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

import {   RouterModule } from '@angular/router';
import {APP_ROUTES} from './app.rutas';
import { HttpClientModule } from "@angular/common/http";
import { BusquedaavanzadaComponent } from './busquedaavanzada/busquedaavanzada.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { MessageService } from './services/message.service';



@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    BusquedaavanzadaComponent,
    WelcomeComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
}
)



export class AppModule { }
