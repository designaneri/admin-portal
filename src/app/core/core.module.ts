import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './components/master/master.component';
// import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthService } from './services/auth.service';
import { HttpService } from './http/http.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    MasterComponent,
    // HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
  ],
  exports:[
    MasterComponent,
    // HeaderComponent,
    SidebarComponent
  ],
  providers:[
    AuthInterceptor,
    AuthService,
    HttpService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor ,multi: true}
  ]
})
export class CoreModule { }
