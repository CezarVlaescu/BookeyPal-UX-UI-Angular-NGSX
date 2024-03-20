import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '', 
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: () => import('../auth/components/login/login-module.module').then(m => m.LoginModuleModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../auth/components/register/register-module.module').then(m => m.RegisterModuleModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
