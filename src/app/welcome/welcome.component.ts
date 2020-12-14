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
isbn:number;
author:string;
genero:string;
editorial:string;
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
films:string="film";


numeroaleatorio:number=0;

frasesfamosa:string[]=["El misterio de la vida no es un problema a resolver, sino una realidad a experimentar ",
"Sea un hombre o sea más que un hombre. Sea firme con su propósito y firme como una piedra",
"El hombre débil se vuelve fuerte cuando no tiene nada, porque sólo entonces puede sentir la locura de la desesperación",
"Si buscas la perfección nunca estarás contento (Anna Karenina, Leo Tolstoy)",
"Mientras el corazón late, mientras el cuerpo y alma siguen juntos, no puedo admitir que cualquier criatura dotada de voluntad tiene necesidad de perder la esperanza en la vida (Viaje al centro de la tierra, Julio Verne)",
"No puedo morir aún doctor. Todavía no. Tengo cosas que hacer. Después de todo, tendré una vida entera en la que morir (El Juego del Ángel, Carlos Ruiz Zafón)",
"Tengo esperanza o podría no vivir (La isla del doctor Moreau, H.G. Wells)",
"Llamo a la gente “rica” cuando son capaces de satisfacer las necesidades de su imaginación (El retrato de una dama, Henry James)",
"El sol es débil cuando se eleva primero, y cobra fuerza y coraje a medida que avanza el día (Vieja tienda de curiosidades, Charles Dickens)",
"La poesía es comunicación. Algo que sirve para hablar con los demás hombres (Vicente Aleixandre)",
"En la bandera de la libertad bordé el amor más grande de mi vida (Federico García Lorca)",
"Yo no hablo de venganzas ni perdones; el olvido es la única venganza y el único perdón (Jorge Luis Borges)",
"Luego alcancé a comprender que el tiempo nunca se gana y que nunca se pierde, que la vida se gasta, simplemente (Almudena Grandes)",
"La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos; con ella no pueden igualarse los tesoros que encierra la tierra ni el mar encubre (Miguel de Cervantes Saavedra)",
"A los dioses no les gusta que las personas no trabajen mucho. Las personas que no están ocupadas continuamente pueden empezar a pensar (mundodisco, Terry Pratchett)",
"A veces es mejor encender un lanzallamas que maldecir a la oscuridad (mundodisco, Terry Pratchett)",
"Ankh-Morpork había coqueteado con muchas formas de gobierno, y había terminado asumiendo ese tipo de democracia que se conoce como ‘Un Hombre, Un Voto’. El Patricio era el Hombre, y el Voto era el suyo (mundodisco, Terry Pratchett)",
"Conozco a las personas que hablan de sufrir por el bien común. ¡Nunca son ellos, joder! Cuando oyes a un hombre gritar: ¡Adelante, bravos camaradas!, verás que siempre es el que está detrás de la jodida roca enorme, y el único que lleva el casco realmente a prueba de flechas (mundodisco, Terry Pratchett)",
"Cuando puedes aplastar ciudades enteras a voluntad, la tendencia a reflexionar en silencio y ver las cosas desde el punto de vista del otro, rara vez resulta necesaria (mundodisco, Terry Pratchett)",
"Dale fuego a un hombre y estará caliente un día, pero préndele fuego y estará caliente el resto de su vida (mundodisco, Terry Pratchett)",
"Dicen que un poco de conocimiento es peligroso, pero no tanto como mucha ignorancia (mundodisco, Terry Pratchett)",
"Dios se rige por patrones extremadamente misteriosos, por no decir tortuosos. El asunto de los dinosaurios es un chiste que los paleontólogos no acaban de coger (mundodisco, Terry Pratchett)",
"El conjunto de la vida es como ver una película. Solo es como si siempre llegases diez minutos después de que empezara y nadie te contase el argumento, así que tienes que averiguarlo a través de las pistas (mundodisco, Terry Pratchett)",
"El sexo es como la cocina: a veces te compras libros enteros llenos de recetas complicadas y fotos interesantes y en ocasiones cuando tienes mucha hambre te imaginarás unos banquetes de impresión. Sin embargo, al final del día te conformas felizmente con unos huevos con chorizo, siempre que estén bien preparados y tal vez acompañados por unas buenas patatas fritas… (mundodisco, Terry Pratchett)",
"Emplear el sarcasmo con según qué gente es como atacar un castillo con merengues (mundodisco, Terry Pratchett)",
"En el interior de cada anciano hay un joven preguntándose qué demonios ha pasado (mundodisco, Terry Pratchett)",
"Hay un rumor que dice que he encontrado a Dios. Creo que no es cierto porque ya me es difícil encontrar mis llaves, y hay evidencia empírica de que estas existen (mundodisco, Terry Pratchett)",
"La historia tiene la costumbre de cambiar a las personas que se creen que la están cambiando a ella (mundodisco, Terry Pratchett)"];

frasemostrar:string;
isbnunderground:number=9780451529558;
underground:Book;
isbngranja:number=9789875801431;
granja:Book;
isbnbells:number=9780307273789;
bell:Book;
isbnKarenina:number=9781593080273;
karenina:Book;
recomendaciones:Book[]=[];


stars=[1,2,3,4,5];
  rating=0;
  hoverState=0;
constructor(private GoodreadsService:GoodreadsService) { }

ngOnInit() {
  this.numeroaleatorio=Math.floor(Math.random() * (this.frasesfamosa.length));
  this.frasemostrar=this.frasesfamosa[this.numeroaleatorio];
  this.GoodreadsService.getBooksisbn(this.isbnunderground).subscribe(data=>{
    //this.prueba1=data.items[0];
    this.recomendaciones.push(data.items[0]);
    console.log(this.recomendaciones);
  })
  this.GoodreadsService.getBooksisbn(this.isbngranja).subscribe(data=>{
    //this.prueba1=data.items[0];
    this.recomendaciones.push(data.items[0]);
    console.log(this.recomendaciones);
  })
  this.GoodreadsService.getBooksisbn(this.isbnbells).subscribe(data=>{
    //this.prueba1=data.items[0];
    this.recomendaciones.push(data.items[0]);
    console.log(this.recomendaciones);
  })
  this.GoodreadsService.getBooksisbn(this.isbnKarenina).subscribe(data=>{
    //this.prueba1=data.items[0];
    this.recomendaciones.push(data.items[0]);
    console.log(this.recomendaciones);
  })





}

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
buscarporIsbn(isbn:number){
  this.GoodreadsService.getBooksisbn(isbn).subscribe(data=>{
    this.books=data.items;
    })

 }

 buscarporAutor(buscar:string){
 this.GoodreadsService.getBooksauthor(buscar).subscribe(data=>{
  this.books=data.items;
  })
}


buscarporEditorial(editorial:string){
  this.GoodreadsService.getBooksPublisher(editorial).subscribe(data=>{
    this.books=data.items;
    })
 }

}
