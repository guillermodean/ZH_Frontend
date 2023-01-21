import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import proj4 from 'proj4';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
item:any = [];
Item:any = [];
map!: L.Map;


  constructor(public itemservice:ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    this.getficha(param);  

  }

  getmap(x: number, y: number){
    this.map = L.map('map').setView([51.505, -0.09], 13);
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
        const {lat,lng}=this.convertUTMToDecimal(this.item.Item.X.S, this.item.Item.Y.S);
        console.log(lat,lng)
        this.getmap(lat,lng);
      },
      err => console.log(err)
    );
  }
  ngOnDestroy() {
    this.map.remove();
  }
  convertUTMToDecimal(x: number, y: number): {lat: number, lng: number} {
    let lat, lng;
    let zone = Math.floor((x / 6) + 31);
    let cm = (x - (zone * 6 - 183)) * 1000000;
    let epsg =  proj4.Proj('EPSG:326' + zone);
    let wgs84 = proj4.Proj('WGS84');
    let point = proj4.Point(cm, y * 1000000);
    proj4.transform(epsg, wgs84, point);
    lat = point.y;
    lng = point.x;
    return {lat: lat, lng: lng};
    console.log(lat, lng)
}
}
