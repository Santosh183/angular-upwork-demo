import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectionListComponent } from './connection-list/connection-list.component';
import { CreateConnectionComponent } from './create-connection/create-connection.component';
import { EditConnectionComponent } from './edit-connection/edit-connection.component';
import { ConnectionDetailsComponent } from './connection-details/connection-details.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectionListComponent,
    children: [
      {
        path: 'create',
        component: CreateConnectionComponent,
      },
      {
        path: 'edit',
        component: EditConnectionComponent
      },
      {
        path: 'details',
        component: ConnectionDetailsComponent,
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
export class ConnectionsRoutingModule { }
