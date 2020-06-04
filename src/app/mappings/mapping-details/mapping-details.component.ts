import { Component, OnInit } from '@angular/core';
import { MappingService } from 'src/app/services/mapping-service/mapping.service';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mapping-details',
  templateUrl: './mapping-details.component.html',
  styleUrls: ['./mapping-details.component.scss']
})
export class MappingDetailsComponent implements OnInit {

  faArrowRight = faArrowRight;
  constructor(public mappingService: MappingService, private router: Router) { }
  mapping: any;

  ngOnInit(): void {
  }

}
