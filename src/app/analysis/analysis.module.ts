import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisComponent } from './analysis.component';
import { AnalysisService } from './analysis.service';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';


@NgModule({
  declarations: [
    AnalysisComponent
  ],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    // Ng2GoogleChartsModule

  ],
  providers:[
    AnalysisService
  ]
})
export class AnalysisModule { }
