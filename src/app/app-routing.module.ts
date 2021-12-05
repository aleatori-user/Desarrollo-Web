import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { CRUDUsuarioComponent } from './componentes/administrador/crud-usuario/crud-usuario.component';
import { CRUDVeterinarioComponent } from './componentes/administrador/crud-veterinario/crud-veterinario.component';
import { RegistroVeterinarioComponent } from './componentes/administrador/registro-veterinario/registro-veterinario.component';
import { RegistroMascotaComponent } from './componentes/registro-mascota/registro-mascota.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { UsuarioCRUDMascotasComponent } from './componentes/usuario-crud-mascotas/usuario-crud-mascotas.component';
import { VeterinarioCRUDMascotasComponent } from './componentes/veterinario-crud-mascotas/veterinario-crud-mascotas.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'registro-usuario',
    component: RegistroUsuarioComponent,
  },
  {
    path: 'registro-mascota',
    component: RegistroMascotaComponent,
  },
  {
    path: 'usuario',
    component: UsuarioCRUDMascotasComponent,
  },
  {
    path: 'veterinario',
    component: VeterinarioCRUDMascotasComponent,
  },

  //########## Rutas Administrador ##########
  {
    path: 'administrador',
    component: AdministradorComponent,
  },
  {
    path: 'administrador-usuario',
    component: CRUDUsuarioComponent,
  },
  {
    path: 'administrador-veterinario',
    component: CRUDVeterinarioComponent,
  },
  {
    path: 'administrador-registro-veterinario',
    component: RegistroVeterinarioComponent,
  }
   //########## Rutas Administrador ##########
  ,
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
