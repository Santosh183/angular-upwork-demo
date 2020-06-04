import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection-service/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection-details',
  templateUrl: './connection-details.component.html',
  styleUrls: ['./connection-details.component.scss']
})
export class ConnectionDetailsComponent implements OnInit {

  constructor(public connectionService: ConnectionService, private router: Router) {
  }

  connection: any;

  ngOnInit(): void {

  }

}
