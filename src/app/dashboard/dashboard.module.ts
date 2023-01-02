import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { AllFilesComponent } from './all-files/all-files.component';
import { FileDetailsComponent } from './file-details/file-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardService } from './services/dashboard.service';
import { FilesService } from './services/files.service';
import { HttpClientModule} from '@angular/common/http';
import { DragDropDirective } from './directives/drag-drop.directive';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgChartsModule } from 'ng2-charts';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardDetailsComponent,
    UploadFileComponent,
    AllFilesComponent,
    FileDetailsComponent,
    DragDropDirective,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    DashboardRoutingModule,
    SharedModule,
    NgxExtendedPdfViewerModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    NgChartsModule,
    BsDatepickerModule.forRoot(),
    // NgxDaterangepickerMd.forRoot()
    // Ng2GoogleChartsModule
  ],
  providers:[
    DashboardService,
    FilesService,
    DatePipe
  ]
})
export class DashboardModule { }
