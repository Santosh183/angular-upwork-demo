import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'connections',
    pathMatch: 'full'
  },
  {
    path: 'connections',
    loadChildren:  () => import('./connections/connections.module').then(m => m.ConnectionsModule)
  },
  {
    path: 'datasets',
    loadChildren:  () => import('./datasets/datasets.module').then(m => m.DatasetsModule)
  },
  {
    path: 'mappings',
    loadChildren:  () => import('./mappings/mappings.module').then(m => m.MappingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
