import { Component, OnInit } from '@angular/core';
import { Datafilms, film } from '../interfaces/datafilms';
import { GoodreadsService} from '../services/goodreads.service';

@Component({
  selector: 'app-busquedapeliculas',
  templateUrl: './busquedapeliculas.component.html',
  styleUrls: ['./busquedapeliculas.component.css']
})
export class BusquedapeliculasComponent implements OnInit {
titulo:string;
datafilms:Datafilms;
films:film[];

stars=[1,2,3,4,5];
  rating=0;
  hoverState=0;
  constructor(private GoodreadsService:GoodreadsService) { }

  ngOnInit(): void {
  }

  getPeliculas(titulo:string){
    this.GoodreadsService.getFilms(titulo).subscribe(data=>{
      this.datafilms=data;
      this.films=this.datafilms.results;
    }),

    error=>console.log(error),
    ()=>console.log(this.datafilms)
    }
}
