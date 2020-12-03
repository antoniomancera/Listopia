import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-busquedaavanzada',
  templateUrl: './busquedaavanzada.component.html',
  styleUrls: ['./busquedaavanzada.component.css']
})




export class BusquedaavanzadaComponent implements OnInit {

prueba:string;

@Input() open: string;

  constructor() { }

  ngOnInit(): void {
  }
getNotification(){
this.prueba=this.open;


}
receivedChildMessage: string;
getMessage(mensaje: string) {
    this.receivedChildMessage = mensaje;
  }
}
