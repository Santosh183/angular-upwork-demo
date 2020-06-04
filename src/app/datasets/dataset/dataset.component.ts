import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {

  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  // tslint:disable-next-line: no-input-rename
  @Input('datasetObj') datasetObj: any;
  // tslint:disable-next-line:no-output-rename
  @Output('editDataset') editDataset: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-output-rename
  @Output('deleteDataset') deleteDataset: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  editData(event: Event) {
    event.stopPropagation();
    this.editDataset.emit(this.datasetObj);
  }
  deleteData(event: Event) {
    event.stopPropagation();
    this.deleteDataset.emit(this.datasetObj);
  }

}
