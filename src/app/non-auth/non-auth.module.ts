import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonAuthRoutingModule } from './non-auth-routing.module';
import { NonAuthComponent } from './non-auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NonAuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    NonAuthRoutingModule,
    SharedModule
  ]
})
export class NonAuthModule { }
