import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MappingListComponent } from './mapping-list/mapping-list.component';
import { MappingsRoutingModule } from './mappings-routing.module';
import { MappingService } from '../services/mapping-service/mapping.service';
import { EditMappingComponent } from './edit-mapping/edit-mapping.component';
import { CreateMappingComponent } from './create-mapping/create-mapping.component';
import { MappingDetailsComponent } from './mapping-details/mapping-details.component';
import { MappingComponent } from './mapping/mapping.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MappingListComponent, EditMappingComponent, CreateMappingComponent, MappingDetailsComponent, MappingComponent],
  imports: [
    MappingsRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    MappingService
  ]
})
export class MappingsModule { }
