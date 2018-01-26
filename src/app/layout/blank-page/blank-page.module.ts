import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';

import { DropdownModule } from 'primeng/dropdown';


@NgModule({
    imports: [CommonModule, BlankPageRoutingModule,
        FormsModule, ReactiveFormsModule,
        DropdownModule,
    ],
    declarations: [BlankPageComponent]
})
export class BlankPageModule { }
