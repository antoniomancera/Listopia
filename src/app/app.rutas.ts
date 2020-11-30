import { Route } from '@angular/router';
 import {BusquedaComponent  } from  './busqueda/busqueda.component';
 import {BusquedaavanzadaComponent  } from  './busquedaavanzada/busquedaavanzada.component';
   export const APP_ROUTES: Route[] =
   [
     { path: 'busqueda', component:BusquedaComponent},
     { path: 'busquedaavanzada', component:BusquedaavanzadaComponent }
];
