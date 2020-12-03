import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-busquedaavanzada',
  templateUrl: './busquedaavanzada.component.html',
  styleUrls: ['./busquedaavanzada.component.css']
})




export class BusquedaavanzadaComponent implements OnInit {

prueba:string="funciona";

@Input() messageEmitter: string;

  constructor() { }

  ngOnInit(): void {
  }

}
