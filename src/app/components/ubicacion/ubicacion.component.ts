import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css'],
})
export class UbicacionComponent implements OnInit {
  map!: L.Map;
  constructor() {}

  ngOnInit() {
    this.map = L.map('map').setView([42.650040031011955, -1.790129274580864], 13);
    L.tileLayer('//server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
            // attribution: attributionExpand('Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community')
        }).addTo(this.map);
    L.marker([42.650040031011955, -1.790129274580864])
      .addTo(this.map)
      .bindPopup('Hello, world!')
      .openPopup();
  }
  ngOnDestroy() {
    this.map.remove();
  }
}
