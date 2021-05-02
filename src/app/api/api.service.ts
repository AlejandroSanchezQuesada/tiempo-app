import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getProvincias(): any {
    return this.httpClient.get(
      'https://www.el-tiempo.net/api/json/v2/provincias'
    );
  }

  getProvinciasDetail(idProvincia: number) {
    return this.httpClient.get(
      'https://www.el-tiempo.net/api/json/v2/provincias/' + idProvincia
    );
  }
}
