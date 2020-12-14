import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { DateBooks,Book } from '../interfaces/date-books';
import { GoodreadsService} from '../services/goodreads.service';
@Component({
  selector: 'app-busquedaavanzada',
  templateUrl: './busquedaavanzada.component.html',
  styleUrls: ['./busquedaavanzada.component.css']
})




export class BusquedaavanzadaComponent implements OnInit {
prueba:any;
  isbn:number;
  author:string;
  genero:string;
  editorial:string
  books:Book[];
  dateBook:DateBooks;
  unodiez:number[]=[0,1,2,3,4,5,6,7,8,9];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  stars=[1,2,3,4,5];
  rating=0;
  hoverState=0;
  constructor(private GoodreadsService:GoodreadsService) { }

  ngOnInit(): void {
  }
buscarporIsbn(isbn:number){
 this.GoodreadsService.getBooksisbn(isbn).subscribe(
   data=>{this.dateBook=data;
    this.books=this.dateBook.items;
   })
}
buscarporAutor(buscar:string){
this.GoodreadsService.getBooksauthor(buscar).subscribe(
  data=>{this.dateBook=data;
  this.books=this.dateBook.items;}
)
}

buscarporGenero(genero:string){
  this.GoodreadsService.getBooksgenre(genero).subscribe(
    data=>{this.dateBook=data;
    this.books=this.dateBook.items;}
  )
}

buscarporEditorial(editorial:string){

  this.GoodreadsService.getBooksPublisher(editorial).subscribe(
    data=>{this.dateBook=data;
    this.books=this.dateBook.items;}
  )
}

}
