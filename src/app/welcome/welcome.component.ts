import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Datafilms } from '../interfaces/datafilms';
import { Book } from '../interfaces/date-books';
import { GoodreadsService} from '../services/goodreads.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
books:Book[];
datafilm:Datafilms;
titulo:string;

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

}
