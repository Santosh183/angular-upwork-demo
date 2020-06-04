import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection-service/connection.service';

@Component({
  selector: 'app-edit-connection',
  templateUrl: './edit-connection.component.html',
  styleUrls: ['./edit-connection.component.scss']
})
export class EditConnectionComponent implements OnInit {

  constructor(public connectionService: ConnectionService) { }

  ngOnInit(): void {

  }

  

}
