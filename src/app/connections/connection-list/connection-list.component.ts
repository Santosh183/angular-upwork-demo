import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection-service/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection-list',
  templateUrl: './connection-list.component.html',
  styleUrls: ['./connection-list.component.scss']
})
export class ConnectionListComponent implements OnInit {

  connectionList = [
    {
      name: 'Connection-1',
      description: 'Description for connection1, Lorem ipsum some random text here.'
    },
    {
      name: 'Connection-2',
      description: 'Description for connection2, Lorem ipsum some random text here.'
    },
    {
      name: 'Connection-3',
      description: 'Description for connection3, Lorem ipsum some random text here.'
    },
    {
      name: 'Connection-4',
      description: 'Description for connection4, Lorem ipsum some random text here.'
    },
    {
      name: 'Connection-5',
      description: 'Description for connection5, Lorem ipsum some random text here.'
    },
    {
      name: 'Connection-6',
      description: 'Description for connection6, Lorem ipsum some random text here.'
    },
    {
      name: 'Connection-7',
      description: 'Description for connection7, Lorem ipsum some random text here.'
    }
  ];
  constructor( public connectionService: ConnectionService, private router: Router) {
  }

  ngOnInit(): void {
    this.connectionService.connection = JSON.parse(JSON.stringify(this.connectionList[0]));
  }


  showConnectionDetails(connection: any) {
    this.connectionService.connection = JSON.parse(JSON.stringify(connection));
    this.router.navigate(['connections', 'details']);

  }
  editConnection(connection: any) {
    this.connectionService.connection = JSON.parse(JSON.stringify(connection));
    this.router.navigate(['connections', 'edit']);
  }
  deleteConnection(connection: any) {
    this.connectionList =
    this.connectionList.filter((con) => {
      return con.name !== connection.name;
    });
    if (this.connectionList.length === 0) {
      this.connectionService.connection = null;
    } else {
      this.connectionService.connection = JSON.parse(JSON.stringify(this.connectionList[0]));
    }
    this.router.navigate(['connections', 'details']);
  }

}

