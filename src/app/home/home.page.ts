import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data;
  provincias: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProvincias().subscribe(
      (response) => {
        this.data = response;
        this.provincias = this.data.provincias;
      },
      (error) => {
        this.data = error;
        console.log('Ha Ocurrido un error \n' + this.data);
      }
    );
  }

  onClick() {}
}
