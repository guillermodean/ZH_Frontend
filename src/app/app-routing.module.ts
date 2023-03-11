import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaComponent } from './components/ficha/ficha.component';
import { ItemComponent } from './components/item/item.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { UsersComponent } from './components/users/users.component';
import { EdititemComponent } from './components/edititem/edititem.component';
import { LoginComponent } from './components/encabezado/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EdituserComponent } from './components/users/edituser/edituser.component';


const routes: Routes = [
  { path: 'fichas', component: FichaComponent },
  { path: 'usuarios', component: UsersComponent },
  {path: 'edituser/:id', component: EdituserComponent},
  { path: 'ubicacion', component: UbicacionComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'edititem/:id', component: EdititemComponent },
  {path:'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
