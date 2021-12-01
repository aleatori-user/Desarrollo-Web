import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http: HttpClient) {


   }

Identificar(usuario: string, clave: string): Observable<ModeloIdentificar>{
  return this.http.post("localhost:3000/identificarPropietario");
}


}


