import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';
import { CreateTemplateComponent } from './create-template/create-template.component';


@NgModule({
  declarations: [
    TemplatesComponent,
    CreateTemplateComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }
