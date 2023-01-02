import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementsComponent } from './agreements.component';
import { CreateAgreementComponent } from './create-agreement/create-agreement.component';
import { VariableDataComponent } from './variable-data/variable-data.component';

const routes: Routes = [
  {
    path: '',
    component: AgreementsComponent
  },
  {
    path: 'create-agreement',
    component: CreateAgreementComponent,
  },
  {
    path: 'variable-data',
    component: VariableDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementsRoutingModule { }
