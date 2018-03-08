import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ExitGuard } from './exit.guard';
import { ModuleWithProviders } from "@angular/core";
import { AuthInterceptor } from './http/auth.interceptor';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TabComponent } from './tab/tab.component';
import { TabbedPaneComponent } from './tabbed-pane/tabbed-pane.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    TabComponent,
    TabbedPaneComponent
],
  providers: [/* Wird ganz bewusst leer gelassen bei SharedModules!! */],
  exports: [
    CityPipe,
    TabComponent,
    TabbedPaneComponent
  ]
})
export class SharedModule { 

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ExitGuard,
        AuthGuard,
        AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        } 
      ]
    }
  }

}
