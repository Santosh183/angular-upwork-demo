import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MappingListComponent } from './mapping-list/mapping-list.component';
import { CreateMappingComponent } from './create-mapping/create-mapping.component';
import { EditMappingComponent } from './edit-mapping/edit-mapping.component';
import { MappingDetailsComponent } from './mapping-details/mapping-details.component';

const routes: Routes = [
  {
    path: '',
    component: MappingListComponent,
    children: [
      {
        path: 'create',
        component: CreateMappingComponent,
      },
      {
        path: 'edit',
        component: EditMappingComponent
      },
      {
        path: 'details',
        component: MappingDetailsComponent,
      },
      {
        path: '',
        redirectTo: 'details',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MappingsRoutingModule { }
