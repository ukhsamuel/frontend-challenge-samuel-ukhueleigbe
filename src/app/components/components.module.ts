import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  CountryComponent, HolidayItemComponent, DynamicSkeletonGridsComponent } from './';



@NgModule({
  declarations: [
    DynamicSkeletonGridsComponent,
    CountryComponent,
    HolidayItemComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    DynamicSkeletonGridsComponent,
    CountryComponent,
    HolidayItemComponent
  ]
})
export class ComponentsModule { }
