import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  ingresarDireccion(){

    this.router.navigate(["inicio-sesion"])

  }
  
  inicioDireccion(){

    this.router.navigate(["inicio"])

  }

}
