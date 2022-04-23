import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import {TuiSvgModule} from "@taiga-ui/core";



@NgModule({
    declarations: [
        CarouselComponent
    ],
    exports: [
        CarouselComponent
    ],
  imports: [
    CommonModule,
    TuiSvgModule
  ]
})
export class CarouselModule { }
