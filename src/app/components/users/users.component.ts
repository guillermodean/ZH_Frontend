import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/users';
import { ViewChild } from '@angular/core';
import { MatDialogModule, MatDialog, MatDialogRef  } from '@angular/material/dialog';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  popupWindow: Window | null = null;
  users:any = [];
  displayedColumns: string[] = ['name','email', 'password','actions'];
  dataSource = new MatTableDataSource<User>();

  searchKey!: string;
  @ViewChild(MatSortModule)
  sort!: MatSortModule;
  @ViewChild(MatPaginatorModule)
  paginator!: MatPaginatorModule;
  
  user:User = {
    email: '',
    password: '',
    name: '',
    id: ''
  }


  constructor(private usersservice:UsersService, private dialog:MatDialogModule, public snackbar:MatSnackBar, private _dialog:MatDialog) { }
  
  ngOnInit(): void {
    console.log("ngOnInit");
    this.getUsers();


  }

  getUsers(){
    this.usersservice.getUsers().subscribe(
      res => {
        this.users = res;
        this.dataSource.data = this.users;
        console.log(this.dataSource.data);
      },
      err => console.log(err)
    );
  }

  

  // Define the function to open the popup window
  addUser() {
    const dialog1 = this._dialog.open(AdduserComponent, {
      width: '500px',
      height: '500px',
      data: {name: this.user.name, email: this.user.email, password: this.user.password}
    });
    this._dialog.afterAllClosed.subscribe(res => {
      this.snackbar.open("Usuario agregado correctamente","",{duration: 2000});
      this.getUsers();

    });
  }
  editUser(id:string,name:string,email:string,password:string){
    const dialog1 = this._dialog.open(EdituserComponent, {
      width: '500px',
      height: '500px',
      data: {id:id,name: name, email: email, password:password},
    });
    // log the data from the popup window
    console.log(dialog1.componentInstance.name)

    this._dialog.afterAllClosed.subscribe(res => {
      this.snackbar.open("Usuario editado correctamente","",{duration: 2000});
      this.getUsers();

    });
  }

  deleteUser(id:string){
    this.usersservice.deleteUser(id).subscribe(
      res => {
        console.log(res);
        this.getUsers();
      },
      err => console.log(err)
    );
  }


}
