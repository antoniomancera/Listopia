import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Datafilms } from '../interfaces/datafilms';
import { Book, DateBooks } from '../interfaces/date-books';
import { GoodreadsService} from '../services/goodreads.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
books:Book[]=[];
datafilm:Datafilms;
titulo:string;
databooks:DateBooks;

rings:string="rings";
prueba:string="s";

romance:string="romance";
fantasy:string="fantasy";
historical:string="historical";
mystery:string="mistery";
thriller:string="Thriller";
science:string="science";
sciFi:string="Science-fiction";
sport:string="sport";
travel:string="travel"
pets:string="animal";
constructor(private GoodreadsService:GoodreadsService) { }

ngOnInit() {}

getSearchBooks(search:string){
    this.GoodreadsService.getBooks(search).subscribe(data=>{
      this.books=data.items;     
      for(let book of this.books){
        this.GoodreadsService.getFilms(book.volumeInfo.title).subscribe(data=>{         
          book.films=data;        
        },
        error=>console.log(error),
        ()=>console.log("peliculas posiblemente relacionadas con",book.volumeInfo.title,book)
        )
        //console.log('las películas relacionadas con el libro son:',book.films);
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

buscarporGenero(genero:string){
  this.GoodreadsService.getBooksgenre(genero).subscribe(data=>{
    this.books=data.items;
    }) 
}
  

}
