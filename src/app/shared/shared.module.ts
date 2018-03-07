import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ExitGuard } from './exit.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe
  ],
  providers: [
    ExitGuard,
    AuthGuard,
    AuthService // Das wird noch zum Problem!
  ],
  exports: [
    CityPipe
  ]
})
export class SharedModule { }
