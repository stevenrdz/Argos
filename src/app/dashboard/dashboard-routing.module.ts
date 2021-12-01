import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './ components/principal/principal.component';
import { CitasComponent } from './ components/citas/citas.component';
import { DatosComponent } from './ components/datos/datos.component';
import { PerfilComponent } from './ components/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children:[
      {path: 'citas', component:CitasComponent},
      {path: 'datos', component:DatosComponent},
      {path: 'perfil', component:PerfilComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
