import { Route } from '@angular/router';
 import { WelcomeComponent } from './welcome/welcome.component';
 import { ContactoComponent } from './contacto/contacto.component';
 import { BusquedapeliculasComponent } from './busquedapeliculas/busquedapeliculas.component';


   export const APP_ROUTES: Route[] =
   [
    { path: 'welcome', component: WelcomeComponent },
     { path: 'contacto', component:ContactoComponent},
     {path:'peliculas',component:BusquedapeliculasComponent },
     { path: '', redirectTo: '/welcome', pathMatch: 'full' },
     // Ruta que no coincide con ninguna de las anteriores
     { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];
