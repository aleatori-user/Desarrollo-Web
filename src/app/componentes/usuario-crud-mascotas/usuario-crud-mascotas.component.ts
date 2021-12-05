import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-usuario-crud-mascotas',
  templateUrl: './usuario-crud-mascotas.component.html',
  styleUrls: ['./usuario-crud-mascotas.component.css']
})
export class UsuarioCRUDMascotasComponent implements OnInit {

 
  constructor(private formularioModal: NgbModal) { }

  ngOnInit(): void {
  }

  formulario(){
    const modal = this.formularioModal.open(FormularioComponent);
  }


}
