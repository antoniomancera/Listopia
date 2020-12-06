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
titulpeliculasfilms:film[]
titulopeliculas:string[]=[];
Volumetitulolibros:VolumeInfo[]=[];
titulolibros:string[]=[];
pelicula:film[]=[];
prubas:string[]=[];
unodiez:number[]=[0,1,2,3,4,5,6,7,8,9];
prubeadatafilm:Datafilms;

libros:string[]=[];
libros1:string[]=[];
volume:VolumeInfo[]=[];
volume1:VolumeInfo[]=[];
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
    //this.volume=this.books.map(({volumeI}))
    this.Volumetitulolibros=this.books.map(({volumeInfo})=>volumeInfo);
    this.titulolibros=this.Volumetitulolibros.map(({title})=>title);

    for(let libro of this.titulolibros){
      this.GoodreadsService.getFilms(libro).subscribe(data=>{
        this.titulpeliculasfilms=data.results;
      })
    }



  })



    }
}
