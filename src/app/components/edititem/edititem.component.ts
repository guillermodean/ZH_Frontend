import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Ficha } from 'src/app/models/fichas';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css'],
})
export class EdititemComponent implements OnInit {
  item: any = [];
  Item: Ficha = {
    Serie: '',
    Cod_antiguo: '',
    ACUNID_antiguo: '',
    Concatenación_2: '',
    Paraje: '',
    Municipio: '',
    Rio: '',
    X: 0,
    Y: 0,
  };
  param: any;
  constructor(
    private route: ActivatedRoute,
    private itemservice: ItemService
  ) {}

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('id');
    this.getficha(this.param);
  }
  getficha(param: any) {
    this.itemservice.getFichaById(param).subscribe((res) => {
      this.item = res;
    });
  }
  edititem() {
    this.itemservice.updateFicha(this.param, this.item).subscribe((res) => {
      console.log(res);
    });
  }
}
