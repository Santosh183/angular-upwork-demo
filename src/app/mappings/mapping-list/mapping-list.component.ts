import { Component, OnInit } from '@angular/core';
import { MappingService } from 'src/app/services/mapping-service/mapping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapping-list',
  templateUrl: './mapping-list.component.html',
  styleUrls: ['./mapping-list.component.scss']
})
export class MappingListComponent implements OnInit {

  mappingList = [
    {
      name: 'employee data mapping',
      source: 'Salesforce-Employees',
      target: 'Google-Employees',
      description: 'Lorem ipsum some text for this mapping',
      mappedFields: [
        {
          sourceField: 'empId',
          targetField: 'employeeId'
        },
        {
          sourceField: 'empName',
          targetField: 'employeeName'
        },
        {
          sourceField: 'empAddress',
          targetField: 'employeeAddress'
        },
        {
          sourceField: 'empMobile',
          targetField: 'employeeMobile'
        },
        {
          sourceField: 'empSalary',
          targetField: 'employeeSalary'
        }
      ]
    },
    {
      name: 'City data mapping',
      source: 'Salesforce-City-data',
      target: 'Google-metro-data',
      description: 'Lorem ipsum some text for this mapping',
      mappedFields: [
        {
          sourceField: 'cityId',
          targetField: 'metroId'
        },
        {
          sourceField: 'cityName',
          targetField: 'metroName'
        },
        {
          sourceField: 'cityState',
          targetField: 'metroState'
        },
        {
          sourceField: 'cityPopulation',
          targetField: 'metroPopulation'
        }
      ]
    }
  ];
  constructor(public mappingService: MappingService, private router: Router) { }

  ngOnInit(): void {
    this.mappingService.mapping = JSON.parse(JSON.stringify(this.mappingList[0]));
  }

  showMappingDetails(mapping: any) {
    this.mappingService.mapping = JSON.parse(JSON.stringify(mapping));
    this.router.navigate(['mappings', 'details']);

  }
  editMapping(mapping: any) {
    this.mappingService.mapping = JSON.parse(JSON.stringify(mapping));
    this.router.navigate(['mappings', 'edit']);
  }
  deleteMapping(mapping: any) {
    this.mappingList =
    this.mappingList.filter((map) => {
      return map.name !== mapping.name;
    });
    if (this.mappingList.length === 0) {
      this.mappingService.mapping = null;
    } else {
      this.mappingService.mapping = JSON.parse(JSON.stringify(this.mappingList[0]));
    }
    this.router.navigate(['mappings', 'details']);
  }

}
