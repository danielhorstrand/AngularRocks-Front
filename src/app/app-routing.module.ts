import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoListComponent } from './components/grupo-list/grupo-list.component';
import { GrupoDetailsComponent } from './components/grupo-details/grupo-details.component';
import { AddGrupoComponent } from './components/add-grupo/add-grupo.component';

const routes: Routes = [
  { path: '', redirectTo: 'grupos', pathMatch: 'full' },
  { path: 'grupos', component: GrupoListComponent },
  { path: 'grupos/:id', component: GrupoDetailsComponent },
  { path: 'add', component: AddGrupoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
