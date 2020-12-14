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
import { ContactoComponent } from './contacto/contacto.component';
import { ContactService } from './services/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StarRatingModule } from 'angular-star-rating';
import { RatingModule } from 'ng-starrating';
import { BusquedapeliculasComponent } from './busquedapeliculas/busquedapeliculas.component';

import { StarComponent } from './star/star.component';



@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    BusquedaavanzadaComponent,
    WelcomeComponent,
    PruebasComponent,
    ContactoComponent,
    BusquedapeliculasComponent,
    StarComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    StarRatingModule,
    StarRatingModule.forRoot()
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
}
)



export class AppModule { }
