import { Component, OnInit,Input } from '@angular/core';
import { Book } from '../interfaces/book';
import { DateBooks } from '../interfaces/date-books';
import { GoodreadsService} from '../services/goodreads.service';
@Component({
  selector: 'app-busquedaavanzada',
  templateUrl: './busquedaavanzada.component.html',
  styleUrls: ['./busquedaavanzada.component.css']
})




export class BusquedaavanzadaComponent implements OnInit {
prueba:any;
  isbn:number;
  author:string;
  books:Book[];
  dateBook:DateBooks;
  constructor(private GoodreadsService:GoodreadsService) { }

  ngOnInit(): void {
  }
buscarporIsbn(isbn:number){
 this.GoodreadsService.getBooksisbn(isbn).subscribe(
   data=>{this.dateBook=data;
    this.books=this.dateBook.items;
   })  
}

}
