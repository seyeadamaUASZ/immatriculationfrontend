import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandevehiculeComponent } from './components/demandevehicule/demandevehicule.component';
import { ImmatriculationComponent } from './immatriculation.component';

const routes: Routes = [
  {
    path: '', component: ImmatriculationComponent,
    children: [
   { path: '', component:DemandevehiculeComponent },
    ],

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImmatriculationRoutingModule { }
