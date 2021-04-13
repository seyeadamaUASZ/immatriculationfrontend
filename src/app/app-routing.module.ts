import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { HomeComponent } from './home/home.component';
import { GuardGuard } from './utilisateur/services/guard.guard';
import { AuthGuard } from './login/services/auth/auth.guard';
import { ExecutionComponent } from './procedures/execution/execution.component';
import { LandingComponent } from './login/components/landing/landing.component';
import { SecteursComponent } from './parametrage/components/groupeservice/secteurs/secteurs.component';
const routes: Routes = [
  { path: 'login',loadChildren: './login/login.module#LoginModule' },
  { path: 'landing',loadChildren: './login/login.module#LoginModule',component:LandingComponent },
  { path: 'home',canActivate: [GuardGuard], loadChildren: './home/home.module#HomeModule' },
  { path: 'application',canActivate: [GuardGuard], loadChildren: './application/application.module#ApplicationModule' },
  { path: 'utilisateur',canActivate: [GuardGuard], loadChildren: './utilisateur/utilisateur.module#UtilisateurModule' },
  { path: 'workflow', canActivate: [GuardGuard], loadChildren: './workflow/workflow.module#WorkflowModule' },
  { path: 'parametrage', canActivate: [GuardGuard], loadChildren: './parametrage/parametrage.module#ParametrageModule' },
  { path: 'formulaire', canActivate: [GuardGuard], loadChildren: './formulaire/formulaire.module#FormulaireModule' },
  { path: 'fichier', canActivate: [GuardGuard], loadChildren: './fichier/fichier.module#FichierModule' },
  { path: 'procedures', canActivate: [AuthGuard], loadChildren: './procedures/procedures.module#ProceduresModule' },
  { path: 'procedures/execution', canActivate: [AuthGuard], component: ExecutionComponent },
  { path: 'procedures/secteurs', canActivate: [AuthGuard], component: SecteursComponent } ,
  { path: 'configuration', canActivate: [AuthGuard], loadChildren: './configuration/configuration.module#ConfigurationModule' } ,
  { path: 'inscription', loadChildren: './inscription/inscription.module#InscriptionModule'},
  { path: 'plaqueimmatriculation', canActivate: [GuardGuard], loadChildren: './plaqueimmatriculation/plaqueimmatriculation.module#PlaqueImmatriculationModule' },
  { path: 'immatriculation', canActivate: [AuthGuard], loadChildren: './immatriculation/immatriculation.module#ImmatriculationModule' } ,
  { path: 'paiement', canActivate: [AuthGuard], loadChildren: './paiement/paiement.module#PaiementModule' } ,

  { path: '**', redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GuardGuard]
})
export class AppRoutingModule { }
