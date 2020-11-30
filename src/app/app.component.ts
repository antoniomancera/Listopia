import { Component } from '@angular/core';
import {DateBooks} from './interfaces/date-books'
import {VolumeInfo} from './interfaces/volume-info'
import {ImageLinks} from './interfaces/image-links'
import {Book} from './interfaces/book'
import { GoodreadsService} from './services/goodreads.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listopia';

  books1:DateBooks;
 books:Book[];


public libro2:Promise<any[]>;
public libro1:Book[];

  constructor(private GoodreadsService1:GoodreadsService) { }

  ngOnInit() {

    this.GoodreadsService1.getBooks3('anillos').subscribe(data=>{
      this.books1=data;
      console.log(this.books1.items[1].volumeInfo);
      console.log(32);
      this.books=this.books1.items;
      console.log(this.books1);
      console.log(this.books1.items[1].volumeInfo['title']);
    })
   }

}
