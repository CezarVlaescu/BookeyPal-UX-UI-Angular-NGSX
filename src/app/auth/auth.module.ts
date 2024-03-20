import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

// components 

import { LoginModuleModule } from './components/login/login-module.module';
import { RegisterModuleModule } from './components/register/register-module.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LoginModuleModule,
    RegisterModuleModule
  ]
})
export class AuthModule { }
