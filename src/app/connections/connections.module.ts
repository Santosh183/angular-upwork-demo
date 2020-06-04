import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionListComponent } from './connection-list/connection-list.component';
import { ConnectionsRoutingModule } from './connections-routing.module';
import { ConnectionComponent } from './connection/connection.component';
import { ConnectionDetailsComponent } from './connection-details/connection-details.component';
import { CreateConnectionComponent } from './create-connection/create-connection.component';
import { EditConnectionComponent } from './edit-connection/edit-connection.component';
import { ConnectionService } from '../services/connection-service/connection.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ConnectionListComponent, ConnectionComponent, ConnectionDetailsComponent,
    CreateConnectionComponent, EditConnectionComponent],
  imports: [
    ConnectionsRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    ConnectionService
  ]
})
export class ConnectionsModule { }
