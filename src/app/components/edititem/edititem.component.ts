import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Ficha } from 'src/app/models/fichas';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css'],
})
export class EdititemComponent implements OnInit {
  editForm: FormGroup= new FormGroup({
    Serie: new FormControl(''),
    Cod_antiguo: new FormControl(''),
    ACUNID_antiguo: new FormControl(''),
    Concatenacion: new FormControl(''),
    Paraje: new FormControl(''),
    Municipio: new FormControl(''),
    Rio: new FormControl(''),
    X: new FormControl(''),
    Y: new FormControl(''),
    Enlace: new FormControl(''),
    Descripcion: new FormControl(''),
    Geologia: new FormControl(''),
    Flora: new FormControl(''),
    Fauna: new FormControl(''),
    Status_de_conservacion: new FormControl(''),
    Recomendaciones: new FormControl(''),
  });
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
  onSubmit() {
    console.log(this.Item)
    this.edititem();
    this.snackBar.open('Ficha editada', 'Cerrar', {
      duration: 2000,
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
