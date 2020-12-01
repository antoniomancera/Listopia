import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import {VolumeInfo} from '../interfaces/volume-info';
import {DateBooks} from '../interfaces/date-books';

import { GoodreadsService} from '../services/goodreads.service';
import {Observable} from 'rxjs';
import { Docs } from '../interfaces/openlibrary/docs';
import { OpenDataBooks } from '../interfaces/openlibrary/open-data-books';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

 books1:DateBooks;
 books2p:DateBooks;
 booksp:Book[];
 books:Book[];
public libro:Promise<Observable<Book[]>>;
public libro2:Promise<any[]>;
public libro1:Book[];
prueba:number[]=[1,2,3,4];

bookdocs:Docs;
booksdocstitle:string[];

Docopen:OpenDataBooks;
Docopenbook:Docs[];

titulo:string;
tit:string;
p:string;


  constructor(private GoodreadsService:GoodreadsService) { }

  ngOnInit() {

     this.GoodreadsService.getBooks3('anillos').subscribe(data=>{
       this.books1=data;


       this.books=this.books1.items;

     })

     this.GoodreadsService.getBooksOpen().subscribe(data=>{
       this.Docopen=data;
this.Docopenbook=this.Docopen.docs;
console.log(this.Docopenbook[0].title_suggest)
       console.log(11323);
       console.log(this.Docopen.docs[0].title_suggest);

       console.log(323);
     })


  }

  getLibros(libro:string){
this.GoodreadsService.getBooks3(libro).subscribe(data=>{
  this.books2p=data;
  this.booksp=this.books2p.items;


})

  }

}
