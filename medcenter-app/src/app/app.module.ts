import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './_shared/shared.module';
import { CoreModule } from './_core/core.module';
import { HomeComponent } from './home/home.component';
import { EspecialidadesComponent } from './servicos/especialidades.component';
import { ExamesComponent } from './servicos/exames.component';
import { MedcenterComponent } from './medcenter/medcenter.component';
import { ContatoComponent } from './contato/contato.component';
import { OdontologiaComponent } from './odontologia/odontologia.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { SettingsComponent } from './admin/settings/settings.component';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import { ServicosAdminComponent } from './admin/servicos-admin/servicos-admin.component';
import { ServicosDialogComponent } from './admin/servicos-admin/servicos-dialog/servicos-dialog.component';
import { ChangePasswordComponent } from './admin/change-password/change-password.component'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EspecialidadesComponent,
    ExamesComponent,
    MedcenterComponent,
    ContatoComponent,
    OdontologiaComponent,
    AdminComponent,
    SettingsComponent,
    ServicosAdminComponent,
    ServicosDialogComponent,
    ChangePasswordComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot(options),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  entryComponents: [ServicosDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
