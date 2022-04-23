import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from "./carousel/carousel.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    CarouselModule
  ]
})
export class ControlsModule { }
