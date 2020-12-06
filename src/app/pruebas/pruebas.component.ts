import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

import { Datafilms, film } from '../interfaces/datafilms';
import { DateBooks,Book, VolumeInfo } from '../interfaces/date-books';
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
nombrepeliculas:string[]=[];
titulolibros:VolumeInfo[]=[];
pelicula:film[]=[];
prubas:string[]=[];
unodiez:number[]=[0,1,2,3,4,5,6,7,8,9];
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
    
    for(var i = 0; i < this.books.length; ++i){
this.books[i].volumeInfo.title;
    }

    console.log(34324);
    console.log(this.books);
    console.log(this.titulolibros[0]);
    console.log(this.titulolibros[1]);
    console.log(this.titulolibros[2]);
    console.log(this.titulolibros[3]);
    console.log(this.titulolibros[4]);
    console.log(this.titulolibros[5]);
    console.log(this.prubas[3]);
    console.log(this.prubas[5]);
    console.log(this.prubas[6]);
    console.log(this.prubas[10]);
    console.log(this.prubas[11]);
    console.log(this.nombrepeliculas[10]);
  console.log(4);
  })

    }
}
