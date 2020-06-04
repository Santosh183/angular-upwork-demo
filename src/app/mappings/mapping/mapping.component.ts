import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPencilAlt, faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit {

  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  faArrowRight = faArrowRight;

  // tslint:disable-next-line: no-input-rename
  @Input('mapping') mapping: any;
  // tslint:disable-next-line:no-output-rename
  @Output('editMapping') editMapping: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-output-rename
  @Output('deleteMapping') deleteMapping: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  editMap(event: Event) {
    event.stopPropagation();
    this.editMapping.emit(this.mapping);
  }
  deleteMap(event: Event) {
    event.stopPropagation();
    this.deleteMapping.emit(this.mapping);
  }

}
