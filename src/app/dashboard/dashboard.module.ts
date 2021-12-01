import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PerfilComponent } from './ components/perfil/perfil.component';
import { CitasComponent } from './ components/citas/citas.component';
import { DatosComponent } from './ components/datos/datos.component';
import { PrincipalComponent } from './ components/principal/principal.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    PerfilComponent,
    CitasComponent,
    DatosComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule { }
