import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ExamesComponent } from './exames/exames.component';
import { MedcenterComponent } from './medcenter/medcenter.component';
import { ContatoComponent } from './contato/contato.component';
import { OdontologiaComponent } from './odontologia/odontologia.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'especialidades', component: EspecialidadesComponent},
  {path:'exames', component: ExamesComponent},
  {path:'odontologia', component: OdontologiaComponent},
  {path:'medcenter', component: MedcenterComponent},
  {path:'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
