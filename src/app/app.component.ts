import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'AxiKassafrontend';

  id: bigint;

  constructor(private  data: DataService) {
  }

  AddBon() {
    this.data.AddNewReceipt().subscribe(data => this.id = data);
  }
}


