
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";

import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators'
import { Book } from '../interfaces/book';
import {VolumeInfo} from '../interfaces/volume-info';
import {DateBooks} from '../interfaces/date-books';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class GoodreadsService {
libros:DateBooks;
libro:Book[];

  constructor(
    public http:HttpClient
  ) { }


  public getBook(): Observable<DateBooks>{
    return this.http.get<DateBooks>('https://www.googleapis.com/books/v1/volumes?q=filibusterismo');
  }

  public getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>('https://www.googleapis.com/books/v1/volumes?q=filibusterismo');

  }
prueba:Book[];
public getBooks3(busqueda:string): Observable<DateBooks>{
  return this.http.get<DateBooks>(`https://www.googleapis.com/books/v1/volumes?q=${busqueda}`);

}

  public getBook2s(): Observable<Book>{
    return this.http.get<Book>('https://www.googleapis.com/books/v1/volumes?q=filibusterismo');

  }


  search(value: string):Book[]{
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
                    .pipe(map(response => this.libro.push(response['items'])))
                    return this.libro;
  }


}





