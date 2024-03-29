import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Ficha } from 'src/app/models/fichas';
import * as L from 'leaflet';
import proj4 from 'proj4';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  item: any = [];
  islogged: boolean = false;
  map!: L.Map;
  Item: Ficha = {
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

  constructor(public itemservice: ItemService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.islogged = true;
    }
    const param = this.route.snapshot.paramMap.get('id');
    this.getficha(param);
  }

  getmap(x: number, y: number) {
    var myIcon = L.icon({
      iconUrl: './assets/images/icons8-césped-doodle/icons8-césped-48.png',
      iconSize: [48, 48],
    });
    this.map = L.map('map').setView([x, y], 13);
    L.tileLayer(
      '//server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
      {
        // attribution: attributionExpand('Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community')
      }
    ).addTo(this.map);
    L.marker([x, y], { icon: myIcon })
      .addTo(this.map)
      .bindPopup(this.item.Municipio)
      .openPopup();
  }

  async getficha(param: any) {
    await this.itemservice.getFichaById(param).subscribe(
      (res) => {
        this.item = res;

        const coordenadas = this.convertirCoordenadas(this.item.X, this.item.Y);
        const lat = coordenadas[0];
        const long = coordenadas[1];
        this.getmap(long, lat);
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
  ngOnDestroy() {
    this.map.remove();
  }
}
