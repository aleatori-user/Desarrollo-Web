import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
})
export class AdministradorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  adminUsuario() {
    this.router.navigate(['administrador-usuario']);
  }
  adminVeterinario() {
    this.router.navigate(['administrador-veterinario']);
  }
  registroVeterinario() {
    this.router.navigate(['administrador-registro-veterinario']);
  }
}
