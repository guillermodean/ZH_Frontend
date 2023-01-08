import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from 'src/app/models/users';
import { ViewChild } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdduserComponent } from './adduser/adduser.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';




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


  constructor(private router: Router, private usersservice:UsersService , public dialog: MatDialog,private snackBar: MatSnackBarModule, private fb: FormBuilder,public dialogRef: MatDialogRef<UsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
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
    const dialog1 = this.dialog.open(AdduserComponent, {
      width: '500px',
      height: '500px',
      data: {name: this.user.name, email: this.user.email, password: this.user.password}
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
  editUser(id:string){
    this.usersservice.updateUser(id,this.user).subscribe(
      res => {
        console.log(res);
        this.getUsers();
      },
      err => console.log(err)
    );
  }

}
