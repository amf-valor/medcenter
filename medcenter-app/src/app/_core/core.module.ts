import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../_shared/shared.module';
import { RouterModule } from '@angular/router';
import { SidenavItemsComponent } from './sidenav-items/sidenav-items.component';
import { FooterComponent } from './footer/footer.component';
import { ZapButtonComponent } from './zap-button/zap-button.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    SidenavItemsComponent, 
    FooterComponent, 
    ZapButtonComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent, 
    SidenavItemsComponent,
    FooterComponent,
    ZapButtonComponent
  ]
})
export class CoreModule { 
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}
