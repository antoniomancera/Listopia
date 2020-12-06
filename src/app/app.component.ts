import { Component ,EventEmitter,Input,Output} from '@angular/core';
import {DateBooks,Book,VolumeInfo,ImageLinks} from './interfaces/date-books'

import { GoodreadsService} from './services/goodreads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listopia';

  books1:DateBooks;
 books:Book[];

 nombre:string;

 @Output() messageEmitter: EventEmitter<string> = new EventEmitter();


public libro2:Promise<any[]>;
public libro1:Book[];
elementobuscar:string;
pruebaenvio="envio";
  constructor(private GoodreadsService1:GoodreadsService,private router: Router) { }

  ngOnInit() {

   }
enviaBusqueda(){
//this.router.navigateByUrl('/busquedaavanzada');
this.messageEmitter.emit(this.pruebaenvio);

}
enviarMensaje(mensaje:string){

}

/*filter(){
this.valor.emit(this.nombre);
}*/
}
