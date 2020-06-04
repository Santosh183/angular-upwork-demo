import { Component, OnInit } from '@angular/core';
import { DatasetService } from 'src/app/services/dataset-service/dataset.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dataset-details',
  templateUrl: './dataset-details.component.html',
  styleUrls: ['./dataset-details.component.scss']
})
export class DatasetDetailsComponent implements OnInit {

  constructor(public datasetService: DatasetService, private router: Router) { }
  dataset: any;

  ngOnInit(): void {
  }

}
