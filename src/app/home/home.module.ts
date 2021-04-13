import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { HomeRoutingModule } from './home-routing.module';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { HomeAppComponent } from './home-app.component';
import { HomeComponent } from './components/home.component';
import { ApplicationRoutingModule } from '../application/application-routing.module';
import { MatExpansionModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { UsersBarreComponent } from './components/widgets/users-barre/users-barre.component';
import { WkformCourbeComponent } from './components/widgets/wkform-courbe/wkform-courbe.component';
import { StatsComponent } from './components/widgets/stats/stats.component';
import { StatsCostumerComponent } from './components/widgets/stats-costumer/stats-costumer.component';
import { MonCompteComponent } from '../utilisateur/components/mon-compte/mon-compte.component';
import { EditLogoCompteComponent } from '../utilisateur/components/edit-logo-compte/edit-logo-compte.component';
import { StatDemandeComponent } from './components/widgets/stat-demande/stat-demande.component';
import { StatTraitantUnComponent } from './components/widgets/stat-traitant-un/stat-traitant-un.component'; 
import { StatTraitantDeuxComponent } from './components/widgets/stat-traitant-deux/stat-traitant-deux.component';
@NgModule({
  declarations: [HomeAppComponent, HomeComponent, UsersBarreComponent, WkformCourbeComponent, StatsComponent],
  imports: [
    CommonModule,
    ChartsModule,
    HomeRoutingModule,
    SharedcomponentModule,
    ApplicationRoutingModule,
    MatExpansionModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedcomponentModule
  ],schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [DatePipe,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
})
export class HomeModule { }
