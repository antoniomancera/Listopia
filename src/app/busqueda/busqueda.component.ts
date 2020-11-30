import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import {VolumeInfo} from '../interfaces/volume-info';
import {DateBooks} from '../interfaces/date-books';

import { GoodreadsService} from '../services/goodreads.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

 books1:DateBooks;
 books:Book[];
public libro:Promise<Observable<Book[]>>;
public libro2:Promise<any[]>;
public libro1:Book[];
prueba:number[]=[1,2,3,4];
  constructor(private GoodreadsService:GoodreadsService) { }

  ngOnInit() {
    //this.libro=this.GoodreadsService.getBooks();
    //this.GoodreadsService.getBooks().subscribe(data=>{this.libro=data});
    //this.libro=this.GoodreadsService.getBooks1();
   // this.libros=this.GoodreadsService.search("tangere");
    //this.libro2=this.GoodreadsService.getBooks2();


    //this.GoodreadsService.getBooks().subscribe(res=>{this.libro1=res},
     // error => { // on failure
     //   console.log('Error Occurred:');
     // });
     this.GoodreadsService.getBooks3('anillos').subscribe(data=>{
       this.books1=data;
       console.log(this.books1.items[1].volumeInfo);
       console.log(32);
       this.books=this.books1.items;
       console.log(this.books1);
       console.log(this.books1.items[1].volumeInfo['title']);
     })
    /*
    this.GoodreadsService.getBooks().subscribe(data => {

      this.books = data;
      console.log(data);
      console.log(this.books[0]);
      console.log(3);
      console.log(data[0].volumeInfo);
    });
    this.GoodreadsService.getBooks().subscribe((Response)=>{this.libro1=Response;
    console.log(this.libro1);});
    */


    /*
    this.GoodreadsService.getBooks().subscribe((data)=>{
      console.log(data);
      for(var i = 0;i<3;i++) {
        console.log(data[i].etag)
     }
      console.log(data[0]);

    });*/
  }

}
