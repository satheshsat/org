import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListComponent, CardComponent, LoaderComponent],
  exports: [ListComponent, CardComponent, LoaderComponent],
})
export class UiModule {}
