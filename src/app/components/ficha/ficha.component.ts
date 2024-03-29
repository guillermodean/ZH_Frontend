import { Component, OnInit } from '@angular/core';
import { FichaService } from '../../services/ficha.service';
import { ViewChild } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Ficha } from 'src/app/models/fichas';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatPaginator } from '@angular/material/paginator';
import * as L from 'leaflet';
import proj4 from 'proj4';
@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css'],
})
export class FichaComponent implements OnInit {
  fichas: any = [];
  displayedColumns: string[] = ['Paraje', 'Municipio', 'X', 'Y', 'Link'];
  dataSource = new MatTableDataSource<Ficha>();

  searchKey!: string;
  @ViewChild(MatSortModule)
  sort!: MatSortModule;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ficha: Ficha = {
    Serie: '',
    Cod_antiguo: '',
    ACUNID_antiguo: '',
    Concatenacion: '',
    Paraje: '',
    Municipio: '',
    Rio: '',
    X: 0,
    Y: 0,
    Enlace: '',
    Descripcion: '',
    Geologia: '',
    Flora: '',
    Fauna: '',
    Status_de_conservacion: '',
    Recomendaciones: '',
  };
  map!: L.Map;

  constructor(
    private fichaservice: FichaService,
    private snackbar: MatSnackBarModule,
  ) {}

  ngOnInit(): void {
    this.getfichas();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getfichas() {
    console.log('getfichas');
    this.fichaservice.getFichas().subscribe(
      (res) => {
        this.fichas = res;
        this.dataSource.data = this.fichas;
        this.dataSource.paginator = this.paginator;
        this.paginator.pageSize = 10;
        this.getmap();
      },
      (err) => console.log(err)
    );
  }
  convertirCoordenadas(x: number, y: number) {
    const origen = '+proj=utm +zone=30 +ellps=GRS80 +units=m +no_defs';
    const destino = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
    const coordenadas = proj4(origen, destino, [Number(x), Number(y)]);
    return coordenadas;
  }
  getmap() {
    var myIcon = L.icon({
      iconUrl: './assets/images/icons8-césped-doodle/icons8-césped-48.png',
      iconSize: [48, 48],
    });
    console.log('getmap');
    this.map = L.map('map').setView(
      [42.650040031011955, -1.790129274580864],
      8
    );
    L.tileLayer(
      '//server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
      {
      }
    ).addTo(this.map);
    this.fichas.forEach((marker: any) => {
      // console.log(marker.X, marker.Y)
      const coordenadas = this.convertirCoordenadas(marker.X, marker.Y);
      const lat = coordenadas[1];
      const long = coordenadas[0];
      L.marker([lat, long],{icon: myIcon }).addTo(this.map).bindPopup('<a href="/item/'+marker.Serie+'">'+marker.Paraje+'</a>')
      .openPopup();
    });
    
  }
  ngOnDestroy() {
    this.map.remove();
  }
}
