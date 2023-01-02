import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AllFilesComponent } from './all-files/all-files.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { DashboardComponent } from './dashboard.component';
import { FileDetailsComponent } from './file-details/file-details.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
  {
    path: '',
    // canActivate:[AuthGuard],
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'details'
      },
      {
        path: 'details',
        component: DashboardDetailsComponent
      },
      {
        path: 'upload-file',
        component: UploadFileComponent
      },
      {
        path: 'all-file',
        component: AllFilesComponent
      },
      {
        path: 'file-details/:id',
        component: FileDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
