import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Ficha } from 'src/app/models/fichas';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  param: any;
  constructor(
    private route: ActivatedRoute,
    private itemservice: ItemService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('id');
    this.getficha(this.param);
  }
  async getficha(param: any) {
    await this.itemservice.getFichaById(param).subscribe((res) => {
      
      this.item = res;
      this.Item = this.item.Item
      console.log(this.Item.X);
    });
  }
  async edititem() {
    await this.itemservice.updateFicha(this.param, this.item).subscribe((res) => {
      console.log(res);
    });
  }
  volver() {
    //estas seguro que quieres volver?
    this.snackBar.open('Volver', 'Cerrar', {
      duration: 2000,
    });
    window.history.back();
    
  }
}
