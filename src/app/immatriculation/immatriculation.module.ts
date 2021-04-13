import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { DndModule } from 'ngx-drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImmatriculationComponent } from './immatriculation.component';
import { ImmatriculationRoutingModule } from './immatriculation-routing.module';

import { DemandevehiculeComponent } from './components/demandevehicule/demandevehicule.component';
import { AddDemandevehiculeComponent } from './components/add-demandevehicule/add-demandevehicule.component';
import { ViewDemandevehiculeComponent } from './components/view-demandevehicule/view-demandevehicule.component';
import { AddGenerernumimmatComponent } from './components/add-generernumimmat/add-generernumimmat.component';
import { ViewGenerernumimmatComponent } from './components/view-generernumimmat/view-generernumimmat.component';
import { AddCalculertarifComponent } from './components/add-calculertarif/add-calculertarif.component';
import { ViewCalculertarifComponent } from './components/view-calculertarif/view-calculertarif.component';
import { ConsultComponent } from './components/consult/consult.component';
import { ConsultVentComponent } from './components/consultVent/consultVent.component';
import { ConsultAttesttComponent } from './components/consultAttest/consultAttest.component';
import { ConsultAssuComponent } from './components/consultAssu/consultAssu.component';
import { ConsultCertiComponent } from './components/consultCerti/consultCerti.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@NgModule({
  declarations: [ImmatriculationComponent, DemandevehiculeComponent,
    AddDemandevehiculeComponent, ViewDemandevehiculeComponent,
    AddGenerernumimmatComponent, ViewGenerernumimmatComponent, AddCalculertarifComponent,
    ViewCalculertarifComponent, ConsultComponent,
    ConsultVentComponent,
    ConsultAttesttComponent,
    ConsultAssuComponent,
    ConsultCertiComponent,
  ],
  imports: [
    CommonModule,
    ImmatriculationRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedcomponentModule,
    SweetAlert2Module.forRoot(),
    DndModule
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }]
})
export class ImmatriculationModule { }
