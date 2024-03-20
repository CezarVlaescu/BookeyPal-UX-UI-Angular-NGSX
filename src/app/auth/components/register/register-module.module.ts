import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterModuleRoutingModule } from './register-module-routing.module';
import { RegisterComponent } from './component/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModuleModule { }
