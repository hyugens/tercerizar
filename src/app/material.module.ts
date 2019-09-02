import {MatButtonModule} from '@angular/material/button';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {MatCardModule} from '@angular/material/card';

import {MatSortModule} from '@angular/material/sort';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatSortModule
    ],
  exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatSortModule
    ],

})
export class MyMaterialModule { }