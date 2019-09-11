import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ExamesComponent } from './exames/exames.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'especialidades', component: EspecialidadesComponent},
  {path:'exames', component: ExamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
