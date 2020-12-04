import { Component, OnInit } from '@angular/core';
import { Datafilms, film } from '../interfaces/datafilms';
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
  constructor(private GoodreadsService:GoodreadsService) { }

  ngOnInit(): void {
  }
getPeliculas(titulo:string){
this.GoodreadsService.getFilms(titulo).subscribe(data=>{
  this.datafilms=data;
  this.films=data.results;

})
}


}
