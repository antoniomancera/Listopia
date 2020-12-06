import { Route } from '@angular/router';
 import {BusquedaComponent  } from  './busqueda/busqueda.component';
 import {BusquedaavanzadaComponent  } from  './busquedaavanzada/busquedaavanzada.component';
 import {PruebasComponent  } from  './pruebas/pruebas.component';
 import { WelcomeComponent } from './welcome/welcome.component';
 import {ContactoComponent} from './contacto/contacto.component';

   export const APP_ROUTES: Route[] =
   [
    { path: 'welcome', component: WelcomeComponent },
     { path: 'busqueda', component:BusquedaComponent},
     { path: 'contacto', component:ContactoComponent},
     { path: 'busquedaavanzada', component:BusquedaavanzadaComponent },
     {path:'pruebas',component:PruebasComponent},

     { path: '', redirectTo: '/welcome', pathMatch: 'full' },
     // Ruta que no coincide con ninguna de las anteriores
     { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];
