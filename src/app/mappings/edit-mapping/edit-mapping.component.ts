import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { MappingService } from 'src/app/services/mapping-service/mapping.service';

@Component({
  selector: 'app-edit-mapping',
  templateUrl: './edit-mapping.component.html',
  styleUrls: ['./edit-mapping.component.scss']
})
export class EditMappingComponent implements OnInit {

  faTrash = faTrash;
  constructor(public mappingService: MappingService) { }

  ngOnInit(): void {
  }

}
