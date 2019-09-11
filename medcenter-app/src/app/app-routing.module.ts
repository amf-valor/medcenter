import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'especialidades', component: EspecialidadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
