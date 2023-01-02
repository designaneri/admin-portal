import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { MaterialModule } from './material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // MaterialModule
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    // MaterialModule
  ],

})
export class SharedModule { }
