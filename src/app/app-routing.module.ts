import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaComponent } from './components/ficha/ficha.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path: 'fichas', component: FichaComponent },
  { path: 'usuarios', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
