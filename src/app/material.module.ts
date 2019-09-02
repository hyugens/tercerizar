import {MatButtonModule} from '@angular/material/button';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule
    ],
  exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule
    ],

})
export class MyMaterialModule { }