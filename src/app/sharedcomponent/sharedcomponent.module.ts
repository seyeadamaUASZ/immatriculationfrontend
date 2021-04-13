import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/rx'
import { MatPaginatorI18nService } from './matPaginatorI18nService';
import { MatPaginatorIntl } from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MenuItemComponent } from './sidenav/menu-item/menu-item.component';
import { AvatarModule } from 'ngx-avatar';
import { MonCompteComponent } from '../utilisateur/components/mon-compte/mon-compte.component';
import { DynamicFormFieldComponent } from '../sharedcomponent/dynamicform/components/dynamic-form-field/dynamic-form-field.component';
import { EditCompteComponent } from '../utilisateur/components/edit-compte/edit-compte.component';
import { EditLogoCompteComponent } from '../utilisateur/components/edit-logo-compte/edit-logo-compte.component';
import { ChangePwdComponent } from '../utilisateur/components/change-pwd/change-pwd.component';
import { ProceduresComponent } from '../procedures/components/procedures.component';
import { AccesscodeDirective } from '../shared/directives/accesscode.directive';
import { AddsecteurComponent } from '../parametrage/components/groupeservice/addsecteur/addsecteur.component';
import { ProceduresAppComponent } from '../procedures/procedures-app-component';
import { DesinscrireComponent } from '../inscription/components/desinscrire/desinscrire.component';
import { GroupeserviceComponent } from '../parametrage/components/groupeservice/groupeservice.component';
import { SecteursComponent } from '../parametrage/components/groupeservice/secteurs/secteurs.component';
import { InfosPayeurComponent } from '../paiement/components/infos-payeur/infos-payeur.component';
import { StatDemandeComponent } from '../home/components/widgets/stat-demande/stat-demande.component';
import { StatTraitantDeuxComponent } from '../home/components/widgets/stat-traitant-deux/stat-traitant-deux.component';
import { StatTraitantUnComponent } from '../home/components/widgets/stat-traitant-un/stat-traitant-un.component';


@NgModule({
  declarations: [ToolbarComponent, SidenavComponent, MenuItemComponent,
    ConfirmDialogComponent,
    DynamicFormFieldComponent,
    MonCompteComponent,
    EditCompteComponent,
    EditLogoCompteComponent,
    DesinscrireComponent,
    ChangePwdComponent,
    AddsecteurComponent,
    ChangePwdComponent,
    ProceduresComponent,
    GroupeserviceComponent,
    InfosPayeurComponent,
    SecteursComponent,
    AccesscodeDirective,
    StatDemandeComponent,
    StatTraitantDeuxComponent,
    StatTraitantUnComponent],

  imports: [
    CommonModule, RouterModule, FormsModule,
    ReactiveFormsModule, MaterialModule,
    TranslateModule, AvatarModule
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent,
    TranslateModule,
    DynamicFormFieldComponent,
    MonCompteComponent,
    EditCompteComponent,
    EditLogoCompteComponent,
    ChangePwdComponent,
    AddsecteurComponent,
    ProceduresComponent,
    DesinscrireComponent,
    GroupeserviceComponent,
    SecteursComponent,
    AccesscodeDirective,
    InfosPayeurComponent,
    StatDemandeComponent,
    StatTraitantDeuxComponent,
    StatTraitantUnComponent

  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorI18nService,
    }
  ],
})
export class SharedcomponentModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

