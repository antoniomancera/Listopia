import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor(public _MessageService: MessageService) { }

  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
    swal('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
    });
    }
}
