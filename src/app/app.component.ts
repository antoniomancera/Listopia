import { Component ,EventEmitter,Input,Output} from '@angular/core';
import {DateBooks} from './interfaces/date-books'
import {VolumeInfo} from './interfaces/volume-info'
import {ImageLinks} from './interfaces/image-links'
import {Book} from './interfaces/book'
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

 @Output() open: EventEmitter<string> = new EventEmitter();


public libro2:Promise<any[]>;
public libro1:Book[];
elementobuscar:string;
pruebaenvio="envio";
  constructor(private GoodreadsService1:GoodreadsService,private router: Router) { }

  ngOnInit() {
/*
    this.GoodreadsService1.getBooks3('anillos').subscribe(data=>{
      this.books1=data;
      console.log(this.books1.items[1].volumeInfo);
      console.log(32);
      this.books=this.books1.items;
      console.log(this.books1);
      console.log(this.books1.items[1].volumeInfo['title']);
    })*/
   }
cambiaBusqueda(){
this.router.navigateByUrl('/busquedaavanzada');
this.open.emit(this.pruebaenvio);
}
enviarMensaje(mensaje:string){
  this.open.emit(mensaje);
}

/*filter(){
this.valor.emit(this.nombre);
}*/
}
