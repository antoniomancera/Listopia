import { Route } from '@angular/router';
 import {BusquedaComponent  } from  './busqueda/busqueda.component';
 import {BusquedaavanzadaComponent  } from  './busquedaavanzada/busquedaavanzada.component';
 import {PruebasComponent  } from  './pruebas/pruebas.component';
 import { WelcomeComponent } from './welcome/welcome.component';
 import { ContactoComponent } from './Contacto/contacto.component';

   export const APP_ROUTES: Route[] =
   [
    { path: 'welcome', component: WelcomeComponent },
     { path: 'busqueda', component:BusquedaComponent},
    
     { path: 'busquedaavanzada', component:BusquedaavanzadaComponent },
     {path:'pruebas',component:PruebasComponent},
     {path:'contacto',component:ContactoComponent},
     { path: '', redirectTo: '/welcome', pathMatch: 'full' },
     // Ruta que no coincide con ninguna de las anteriores
     { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];
