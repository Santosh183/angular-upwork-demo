import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasetListComponent } from './dataset-list/dataset-list.component';
import { DatasetsRoutingModule } from './datasets-routing.module';
import { DatasetService } from '../services/dataset-service/dataset.service';
import { DatasetComponent } from './dataset/dataset.component';
import { DatasetDetailsComponent } from './dataset-details/dataset-details.component';
import { CreateDatasetComponent } from './create-dataset/create-dataset.component';
import { EditDatasetComponent } from './edit-dataset/edit-dataset.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DatasetListComponent, DatasetComponent, DatasetDetailsComponent, CreateDatasetComponent, EditDatasetComponent],
  imports: [
    DatasetsRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    DatasetService
  ]
})
export class DatasetsModule { }
