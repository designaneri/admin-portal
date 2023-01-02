import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreementsRoutingModule } from './agreements-routing.module';
import { AgreementsComponent } from './agreements.component';
import { CreateAgreementComponent } from './create-agreement/create-agreement.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { VariableDataComponent } from './variable-data/variable-data.component';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};
 
@NgModule({
  declarations: [
    AgreementsComponent,
    CreateAgreementComponent,
    VariableDataComponent
  ],
  imports: [
    CommonModule,
    AgreementsRoutingModule,
    ModalModule.forRoot(),
    NgWizardModule.forRoot(ngWizardConfig),
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AgreementsModule { }
