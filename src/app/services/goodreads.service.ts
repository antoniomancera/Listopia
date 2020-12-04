
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";
import { Component, Input } from '@angular/core'
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators'
import { Book } from '../interfaces/book';
import {VolumeInfo} from '../interfaces/volume-info';
import {DateBooks} from '../interfaces/date-books';
import { stringify } from 'querystring';
import {Docs} from '../interfaces/openlibrary/docs';
import {OpenDataBooks} from '../interfaces/openlibrary/open-data-books';


@Injectable({
  providedIn: 'root'
})
export class GoodreadsService {
libros:DateBooks;
libro:Book[];


  constructor(
    public http:HttpClient
  ) { }
key:string="AIzaSyB8g-064mS_49knthDIKQPx7ju_6W3AFHU";

  public getBook(): Observable<DateBooks>{
    return this.http.get<DateBooks>('https://www.googleapis.com/books/v1/volumes?q=filibusterismo');
  }

  public getBooks(busqueda:string): Observable<DateBooks>{
    return this.http.get<DateBooks>(`https://www.googleapis.com/books/v1/volumes?q=${busqueda}&maxResults=40`);

  }

  public getBooksisbn(busqueda:number): Observable<DateBooks>{
    return this.http.get<DateBooks>(`https://www.googleapis.com/books/v1/volumes?q= +isbn:${busqueda}`);

  }
  public getBooksauthor(busqueda:string): Observable<DateBooks>{
    return this.http.get<DateBooks>(`https://www.googleapis.com/books/v1/volumes?q= +inauthor:${busqueda}`);

  }
  public getBooksauthor1(busqueda:string): Observable<DateBooks>{
    return this.http.get<DateBooks>(`https://www.googleapis.com/books/v1/volumes?q= +inauthor:tolkien&key=AIzaSyB8g-064mS_49knthDIKQPx7ju_6W3AFHU`);

  }

  public getBooksgenre(genre:string): Observable<DateBooks>{
    return this.http.get<DateBooks>(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}`);

  }

  public getBooksPublisher(publisher:string): Observable<DateBooks>{
    return this.http.get<DateBooks>(`https://www.googleapis.com/books/v1/volumes?q=inpublisher:${publisher}`);

  }

public getBooks3(busqueda:string): Observable<DateBooks>{
  return this.http.get<DateBooks>(  `https://www.googleapis.com/books/v1/volumes?q=${busqueda}&maxResults=40`);

}

  public getBook2s(): Observable<Book>{
    return this.http.get<Book>('https://www.googleapis.com/books/v1/volumes?q=filibusterismo');

  }

public getBooksOpen():Observable<OpenDataBooks>{
  return this.http.get<OpenDataBooks>('http://openlibrary.org/search.json?q=the+lord+of+the+rings');
}



}





