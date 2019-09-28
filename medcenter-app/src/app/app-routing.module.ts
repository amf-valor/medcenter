import { NgModule, LOCALE_ID } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EspecialidadesComponent } from './servicos/especialidades.component';
import { ExamesComponent } from './servicos/exames.component';
import { MedcenterComponent } from './medcenter/medcenter.component';
import { ContatoComponent } from './contato/contato.component';
import { OdontologiaComponent } from './odontologia/odontologia.component';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { AdminComponent } from './admin/admin.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { ServicosAdminComponent } from './admin/servicos-admin/servicos-admin.component';
import { AuthGuard } from './_services/auth.guard';
import { ChangePasswordComponent } from './admin/change-password/change-password.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'especialidades', component: EspecialidadesComponent},
  {path:'exames', component: ExamesComponent},
  {path:'odontologia', component: OdontologiaComponent},
  {path:'medcenter', component: MedcenterComponent},
  {path:'contato', component: ContatoComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/settings', component: SettingsComponent, canActivate:[AuthGuard]},
  {path: 'admin/services', component: ServicosAdminComponent, canActivate:[AuthGuard]},
  {path: 'admin/changePassword', component: ChangePasswordComponent, canActivate:[AuthGuard]}
];

registerLocaleData(pt);
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers: [{provide: LOCALE_ID, useValue: 'pt'}]
})
export class AppRoutingModule { }
