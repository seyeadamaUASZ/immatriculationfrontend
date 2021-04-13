import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaqueImmatriculationComponent } from './plaqueimmatriculation.component';
import { ListPlaqueImmatriculationComponent } from './components/list-plaqueimmatriculation/list-plaqueimmatriculation.component';

const routes: Routes = [
  {
    path: '', component: PlaqueImmatriculationComponent,
    children: [
      { path: '', component: ListPlaqueImmatriculationComponent },
    ],

  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaqueImmatriculationRoutingModule { }