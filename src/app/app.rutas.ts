import { Route } from '@angular/router';
 import {BusquedaComponent  } from  './busqueda/busqueda.component';
 import {BusquedaavanzadaComponent  } from  './busquedaavanzada/busquedaavanzada.component';
 import { WelcomeComponent } from './welcome/welcome.component';
   export const APP_ROUTES: Route[] =
   [
    { path: 'welcome', component: WelcomeComponent },
     { path: 'busqueda', component:BusquedaComponent},
     { path: 'busquedaavanzada', component:BusquedaavanzadaComponent },
     { path: '', redirectTo: '/welcome', pathMatch: 'full' },
     // Ruta que no coincide con ninguna de las anteriores
     { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];
