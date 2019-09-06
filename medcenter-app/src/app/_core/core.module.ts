import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    SharedModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { 
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}
