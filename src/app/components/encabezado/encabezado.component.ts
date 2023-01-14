import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit {
  login = false;
  constructor() {}

  ngOnInit(): void {}
  logged() {
    this.login = true
  }
}
