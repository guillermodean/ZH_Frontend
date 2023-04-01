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

  }
}
