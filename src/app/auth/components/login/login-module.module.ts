import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModuleRoutingModule } from './login-module-routing.module';
import { LoginComponent } from './component/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModuleModule { }
