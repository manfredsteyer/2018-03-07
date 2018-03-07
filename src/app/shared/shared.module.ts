import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ExitGuard } from './exit.guard';
import { ModuleWithProviders } from "@angular/core";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe
  ],
  providers: [/* Wird ganz bewusst leer gelassen bei SharedModules!! */],
  exports: [
    CityPipe
  ]
})
export class SharedModule { 

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ExitGuard,
        AuthGuard,
        AuthService 
      ]
    }
  }

}
