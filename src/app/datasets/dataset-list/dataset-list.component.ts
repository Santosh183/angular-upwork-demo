import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasetService } from 'src/app/services/dataset-service/dataset.service';

@Component({
  selector: 'app-dataset-list',
  templateUrl: './dataset-list.component.html',
  styleUrls: ['./dataset-list.component.scss']
})
export class DatasetListComponent implements OnInit {

  datasetList = [
    {
      name: 'Salesforce-Employees',
      description: 'Lorem ipsum some text for Salesforce-Employees',
      fields: [
        {
          name: 'empId',
          type: 'number'
        },
        {
          name: 'empName',
          type: 'string'
        },
        {
          name: 'empAddress',
          type: 'string'
        },
        {
          name: 'empMobile',
          type: 'string'
        },
        {
          name: 'empSalary',
          type: 'number'
        }
      ]
    },
    {
      name: 'Google-employees',
      description: 'Lorem ipsum some text for Google-employees',
      fields: [
        {
          name: 'employeeId',
          type: 'number'
        },
        {
          name: 'employeeName',
          type: 'string'
        },
        {
          name: 'employeeAddress',
          type: 'string'
        },
        {
          name: 'employeeMobile',
          type: 'string'
        },
        {
          name: 'employeeSalary',
          type: 'number'
        }
      ]
    },
    {
      name: 'Salesforce-City-data',
      description: 'Lorem ipsum some text for Salesforce-City-data ',
      fields: [
        {
          name: 'cityId',
          type: 'number'
        },
        {
          name: 'cityName',
          type: 'string'
        },
        {
          name: 'cityState',
          type: 'string'
        },
        {
          name: 'cityPopulation',
          type: 'string'
        }
      ]
    },
    {
      name: 'Google-metro-data',
      description: 'Lorem ipsum some text for Google-metro-data',
      fields: [
        {
          name: 'metroId',
          type: 'number'
        },
        {
          name: 'metroName',
          type: 'string'
        },
        {
          name: 'metroState',
          type: 'string'
        },
        {
          name: 'metroPopulation',
          type: 'string'
        }
      ]
    }
  ];
  constructor(public datasetService: DatasetService, private router: Router) { }

  ngOnInit(): void {
    this.datasetService.dataset = JSON.parse(JSON.stringify(this.datasetList[0]));
  }
  showDatasetDetails(dataset: any) {
    this.datasetService.dataset = JSON.parse(JSON.stringify(dataset));
    this.router.navigate(['datasets', 'details']);

  }
  editDataset(dataset: any) {
    this.datasetService.dataset = JSON.parse(JSON.stringify(dataset));
    this.router.navigate(['datasets', 'edit']);
  }
  deleteDataset(dataset: any) {
    this.datasetList =
    this.datasetList.filter((data) => {
      return data.name !== dataset.name;
    });
    if (this.datasetList.length === 0) {
      this.datasetService.dataset = null;
    } else {
      this.datasetService.dataset = JSON.parse(JSON.stringify(this.datasetList[0]));
    }
    this.router.navigate(['datasets', 'details']);
  }

}
