import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './core/components/master/master.component';
// import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    // canActivate:[AuthGuard],
    component: MasterComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        // canActivate:[AuthGuard],
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'templates',
        loadChildren: () => import('./templates/templates.module').then(m => m.TemplatesModule)
      },
      {
        path: 'agreements',
        loadChildren: () => import('./agreements/agreements.module').then(m => m.AgreementsModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      }
    ]
  },
  {
    path: 'non-auth',
    loadChildren: () => import('./non-auth/non-auth.module').then(m => m.NonAuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
