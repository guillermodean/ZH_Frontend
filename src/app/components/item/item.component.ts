import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Ficha } from 'src/app/models/fichas';
import * as L from 'leaflet';
import proj4 from 'proj4';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
item:any = [];

map!: L.Map;
Item:Ficha = {
  Serie: '',
  Cod_antiguo: '',
  ACUNID_antiguo: '',
  Concatenación_2: '',
  Paraje: '',
  Municipio: '',
  Rio: '',
  X: 0, 
  Y: 0
}

  constructor(public itemservice:ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    this.getficha(param);  

  }

  getmap(x: number, y: number){
    this.map = L.map('map').setView([x, y], 13);
    L.tileLayer('//server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
            // attribution: attributionExpand('Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community')
        }).addTo(this.map);
    L.marker([x,y])
      .addTo(this.map)
      .bindPopup('Hello, world!')
      .openPopup();
  }

  getficha(param:any){
    this.itemservice.getFichaById(param).subscribe(
      res => {
        this.item = (res);
        this.getmap(this.item.Item.X.S,this.item.Item.Y.S);
      },
      err => console.log(err)
    );
  }
  ngOnDestroy() {
    this.map.remove();
  }

}
