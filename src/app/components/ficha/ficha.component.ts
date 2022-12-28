import { Component, OnInit } from '@angular/core';
import { FichaService } from '../../services/ficha.service';
import { ViewChild } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Ficha } from 'src/app/models/fichas';
@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {

  fichas:any = [];
  displayedColumns: string[] = ['Serie', 'Paraje', 'Municipio', 'X', 'Y'];
  dataSource = new MatTableDataSource<Ficha>();

  searchKey!: string;
  @ViewChild(MatSortModule)
  sort!: MatSortModule;
  @ViewChild(MatPaginatorModule)
  paginator!: MatPaginatorModule;

 ficha:Ficha = {
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

  constructor(private fichaservice:FichaService, private snackbar: MatSnackBarModule) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.getfichas();

  }
  getfichas(){
    console.log("getfichas");
    this.fichaservice.getFichas().subscribe(
      res => {
        this.fichas = res;
        this.dataSource.data = this.fichas;
        console.log(this.dataSource.data);
      },
      err => console.log(err)
    );
  }

}
