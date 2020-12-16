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

genero:string="";

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

  ngOnInit(): void {
  }

  getPeliculas(titulo:string){
    this.GoodreadsService.getFilms(titulo).subscribe(data=>{
      this.datafilms=data;
      this.films=this.datafilms.results;
      for(let film of this.films){
        film.vote_average=Math.round(film.vote_average/2)+1;
        film.genre=[];
        for(let gen of film.genre_ids){
          if(gen==28){

            film.genre.push("Action");
          }
          else if(gen==12){
            film.genre.push("Adventure");
          }
          else if(gen==16){
            film.genre.push("Animation");
          }
          else if(gen==35){
            film.genre.push("Comedy");
          }
          else if(gen==80){
            film.genre.push("Crime");
          }
          else if(gen==99){
            film.genre.push("Documentary");
          }
          else if(gen==18){
            film.genre.push("Drama");
          }
          else if(gen==10751){
            film.genre.push("Family");
          }
          else if(gen==14){
            film.genre.push("Fantasy");
          }
          else if(gen==36){
            film.genre.push("History");
          }
          else if(gen==27){
            film.genre.push("Horror");
          }
          else if(gen==10402){
            film.genre.push("Music");
          }
          else if(gen==9648){
            film.genre.push("Mistery");
          }
          else if(gen==10749){
            film.genre.push("Romance");
          }
          else if(gen==878){
            film.genre.push("Science Fiction");
          }
          else if(gen==10770){
            film.genre.push("TV Movie");
          }
          else if(gen==53){
            film.genre.push("Thriller");
          }
          else if(gen==10752){
            film.genre.push("War");
          }
          else if(gen==37){
            film.genre.push("Western");
          }
          else if(gen==10759){
            film.genre.push("Action & Adventure");
          }
          else if(gen==16){
            film.genre.push("Animation");
          }
          else if(gen==35){
            film.genre.push("Comedy");
          }
          else if(gen==80){
            film.genre.push("Crime");
          }
          else if(gen==99){
            film.genre.push("Documentary");
          }
          else if(gen==18){
            film.genre.push("Drama");
          }
          else if(gen==10751){
            film.genre.push("Family");
          }
          else if(gen==10762){
            film.genre.push("Kids");
          }
          else if(gen==9648){
            film.genre.push("Mistery");
          }
          else if(gen==10763){
            film.genre.push("News");
          }
          else if(gen==10763){
            film.genre.push("News");
          }
          else if(gen==10764){
            film.genre.push("Reality");
          }
          else if(gen==10765){
            film.genre.push("Sci-Fi & Fantasy");
          }
          else if(gen==10766){
            film.genre.push("Soap");
          }
          else if(gen==10767){
            film.genre.push("Talk");
          }
          else if(gen==10768){
            film.genre.push("War & Politics");
          }
          else{
            film.genre.push("Western");
          }
      }
    }

    }),

    error=>console.log(error),
    ()=>console.log('pelicula',this.datafilms)
    console.log(this.datafilms);

  }


}




