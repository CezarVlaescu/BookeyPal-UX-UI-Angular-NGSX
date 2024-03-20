import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentHomeRoutingModule } from './component-home-routing.module';
import { MainComponent } from './component/main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ComponentHomeRoutingModule
  ],
  exports: [MainComponent]
})
export class ComponentHomeModule { }
