import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './_shared/shared.module';
import { CoreModule } from './_core/core.module';
import { HomeComponent } from './home/home.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ExamesComponent } from './exames/exames.component';
import { MedcenterComponent } from './medcenter/medcenter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EspecialidadesComponent,
    ExamesComponent,
    MedcenterComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
