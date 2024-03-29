import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichaComponent } from './components/ficha/ficha.component';
import { UsersComponent } from './components/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// header

import {MatToolbarModule} from '@angular/material/toolbar';

/*Tabla*/
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import * as L from 'leaflet';
import { AdduserComponent } from './components/users/adduser/adduser.component';
// Form fields
import { FormsModule,  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/encabezado/login/login.component';
import { ItemComponent } from './components/item/item.component';
import { EdititemComponent } from './components/edititem/edititem.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { EdituserComponent } from './components/users/edituser/edituser.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



// import { _MatDialogBase ,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    FichaComponent,
    UsersComponent,
    EncabezadoComponent,
    SidenavComponent,
    UbicacionComponent,
    AdduserComponent,
    LoginComponent,
    ItemComponent,
    EdititemComponent,
    HomeComponent,
    FooterComponent,
    EdituserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    // MatDialogRef,


  ],
  exports: [
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
