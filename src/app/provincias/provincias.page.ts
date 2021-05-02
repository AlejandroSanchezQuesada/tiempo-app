import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  NavController,
} from '@ionic/angular';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.page.html',
  styleUrls: ['./provincias.page.scss'],
})
export class ProvinciasPage implements OnInit {
  datosProvincia: any[] = [];
  idProvincia: number;
  data: any;
  datosCargados: boolean = false;
  loading = this.loadingController;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private navController: NavController,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {
    this.route.params.subscribe((params) => {
      this.idProvincia = params['idProvincia'];
    });
  }

  ngOnInit() {
    const loading = this.loadingController.create({
      message: 'Cargando Datos, por favor espere...',
    });

    loading.then((load) => load.present());

    this.apiService.getProvinciasDetail(this.idProvincia).subscribe(
      (response) => {
        this.data = response;
        this.datosProvincia = this.data;
        console.log(this.datosProvincia);

        this.datosCargados = true;
        loading.then((load) => load.dismiss());
      },
      (error) => {
        this.data = error;
        console.log(this.data);
        loading.then((load) => load.dismiss());

        const alerta = this.alertController
          .create({
            message:
              'Ha ocurrido un error con la API del servidor.Sentimos las molestias',
            buttons: ['Aceptar'],
          })
          .then((mostrar) => mostrar.present());

        this.navController.navigateBack('/home');
      }
    );
  }
}
