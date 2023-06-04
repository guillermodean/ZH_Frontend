import { Component, OnInit,HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';




@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit {
  isloggedin:boolean = false;
  name=localStorage.getItem('name');

  constructor(private dialog:MatDialogModule, public snackbar:MatSnackBar, private _dialog:MatDialog, private router:Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.isloggedin = true;
    }
    else{
      this.isloggedin = false;
    }
  }
  login() {
    const dialog1 = this._dialog.open(LoginComponent, {
      width: '500px',
      height: '500px',
      // data: {name: this.user.name, email: this.user.email, password: this.user.password}
    });
    this._dialog.afterAllClosed.subscribe(res => {
      // this.router.navigate(['/']);
      window.location.reload();
      this.snackbar.open("Usuario agregado correctamente","",{duration: 2000});
      // this.getUsers();


    });
  }
  logout(){
    this.isloggedin = false;
    localStorage.removeItem('token');
  };
  

}
