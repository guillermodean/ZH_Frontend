import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaComponent } from './components/ficha/ficha.component';
import { ItemComponent } from './components/item/item.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path: 'fichas', component: FichaComponent },
  { path: 'usuarios', component: UsersComponent },
  { path: 'ubicacion', component: UbicacionComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'item/:id', component: ItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
