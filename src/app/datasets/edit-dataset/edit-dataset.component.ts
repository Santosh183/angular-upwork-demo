import { Component, OnInit } from '@angular/core';
import { DatasetService } from 'src/app/services/dataset-service/dataset.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-dataset',
  templateUrl: './edit-dataset.component.html',
  styleUrls: ['./edit-dataset.component.scss']
})
export class EditDatasetComponent implements OnInit {

  faTrash = faTrash;
  constructor(public datasetService: DatasetService) { }

  ngOnInit(): void {
  }

}
