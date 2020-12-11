import { Component, OnInit } from '@angular/core';

import {DateBooks, Book} from '../interfaces/date-books';

import { GoodreadsService} from '../services/goodreads.service';
import {Observable} from 'rxjs';
import { Docs } from '../interfaces/openlibrary/docs';
import { OpenDataBooks } from '../interfaces/openlibrary/open-data-books';
import { Datafilms, film } from '../interfaces/datafilms';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {


 books:Book[];


datafilm:Datafilms;

titulo:string;
tit:string;



  constructor(private GoodreadsService:GoodreadsService) { }

  ngOnInit() {}

  getSearchBooks(search:string){
    this.GoodreadsService.getBooks(search).subscribe(data=>{
      this.books=data.items;
      for(let book of this.books){
        book.films=this.getFilmsrelatedBook(book.volumeInfo.title);
      }
    },
      error=>console.log(error),
      ()=>console.log(this.books))
  }

  getFilmsrelatedBook(search:string):Datafilms{
    this.GoodreadsService.getFilms(search).subscribe(data=>{
      this.datafilm=data;
    })
    return this.datafilm;
  }

/*



*/

}
