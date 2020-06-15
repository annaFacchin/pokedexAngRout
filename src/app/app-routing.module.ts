import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { TypesDashboardComponent } from './components/types-dashboard/types-dashboard.component';


const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'types', component: TypesDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
