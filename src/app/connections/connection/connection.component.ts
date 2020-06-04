import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  // tslint:disable-next-line: no-input-rename
  @Input('connection') connection: any;
  // tslint:disable-next-line:no-output-rename
  @Output('editConnection') editConnection: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-output-rename
  @Output('deleteConnection') deleteConnection: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  editCon(event: Event) {
    event.stopPropagation();
    this.editConnection.emit(this.connection);
  }
  deleteCon(event: Event) {
    event.stopPropagation();
    this.deleteConnection.emit(this.connection);
  }

}
