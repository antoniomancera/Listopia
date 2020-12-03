import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

import {   RouterModule } from '@angular/router';
import {APP_ROUTES} from './app.rutas';
import { HttpClientModule } from "@angular/common/http";
import { BusquedaavanzadaComponent } from './busquedaavanzada/busquedaavanzada.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    BusquedaavanzadaComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
}
)



export class AppModule { }
