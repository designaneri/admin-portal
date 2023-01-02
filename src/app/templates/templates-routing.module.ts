import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { TemplatesComponent } from './templates.component';

const routes: Routes = [
  {
    path: '',
    component: TemplatesComponent
  },
  {
    path: 'create-template',
    component: CreateTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
