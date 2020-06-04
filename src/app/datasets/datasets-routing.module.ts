import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasetListComponent } from './dataset-list/dataset-list.component';
import { CreateDatasetComponent } from './create-dataset/create-dataset.component';
import { DatasetDetailsComponent } from './dataset-details/dataset-details.component';
import { EditDatasetComponent } from './edit-dataset/edit-dataset.component';

const routes: Routes = [
  {
    path: '',
    component: DatasetListComponent,
    children: [
      {
        path: 'create',
        component: CreateDatasetComponent,
      },
      {
        path: 'edit',
        component: EditDatasetComponent
      },
      {
        path: 'details',
        component: DatasetDetailsComponent,
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
export class DatasetsRoutingModule { }
