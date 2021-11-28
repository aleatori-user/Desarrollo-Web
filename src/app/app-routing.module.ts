import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { RegistroMascotaComponent } from './componentes/registro-mascota/registro-mascota.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UsuarioCRUDComponent } from './componentes/usuario-crud/usuario-crud.component';
import { VeterinarioCRUDComponent } from './componentes/veterinario-crud/veterinario-crud.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [{
  path:"inicio",
  component: InicioComponent
},
{
  path:"",
  component: InicioComponent
},
{
  path:"registro-usuario",
  component: RegistroComponent
},
{
  path:"registro-mascota",
  component: RegistroMascotaComponent
},
{
  path:"usuario",
  component: UsuarioCRUDComponent
},
{
  path:"inicio-sesion",
  component: InicioSesionComponent
},
{
  path:"veterinario",
  component: VeterinarioCRUDComponent
},
{
  path:"**",
  component: ErrorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
