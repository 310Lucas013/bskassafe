import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  readonly ROOT_URL = 'http://localhost:8081';

  AddNewReceipt() {
    return this.http.get<bigint>(this.ROOT_URL + '/receipt/add/');
  }

}
