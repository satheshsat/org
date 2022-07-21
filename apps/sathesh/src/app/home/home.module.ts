import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { UiModule } from '@org/ui';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    UiModule
  ],
  declarations: [HomeComponent]
})
export class HomePageModule {}