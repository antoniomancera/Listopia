import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Book } from '../interfaces/book';
import { Datafilms, film } from '../interfaces/datafilms';
import { DateBooks } from '../interfaces/date-books';
import { OpenDataBooks } from '../interfaces/openlibrary/open-data-books';
import { GoodreadsService} from '../services/goodreads.service';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
datafilms:Datafilms;
films:film[];
titulo:string;
titul:string;
databooks:DateBooks;
books:Book[];
prueba:string;
pruebab:Book;
nombrepeliculas:string[];
pelicula:film[];
prubas:string[];

prubeadatafilm:Datafilms;
  constructor(private GoodreadsService:GoodreadsService) { }

  ngOnInit(): void {
  }
getPeliculas(titulo:string):film[]{
this.GoodreadsService.getFilms(titulo).subscribe(data=>{
  this.datafilms=data;
  this.films=data.results;

})
return this.films;
}

getLibros(libro:string){
  this.GoodreadsService.getBooks3(libro).subscribe(data=>{
    this.databooks=data;
    this.books=this.databooks.items;
    this.prueba=this.books[0].volumeInfo['title'];
    
    for(let book in this.books){
      this.GoodreadsService.getFilms(book).subscribe(data=>{
        this.prubeadatafilm=data;
        this.nombrepeliculas.push(this.prubeadatafilm.results[0].title);
        //this.nombrepeliculas.push(data.results[0].title)
      })
      //this.prubas.push("add");
      //this.pelicula=this.getPeliculas(book);
      //this.nombrepeliculas.push(this.pelicula['title']);
    }
    
    console.log(34324);
    console.log(this.nombrepeliculas[0]);
  console.log(4);
  })
  
    }
}
