import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { User } from 'src/app/models/users';
import { ViewChild } from '@angular/core';


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
    _id: ''
  }


  constructor(private usersservice:UsersService) { }
  
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
    // Set the dimensions for the window
    const windowWidth = 500;
    const windowHeight = 500;

    // Calculate the position of the window based on the current window size
    const windowLeft = (screen.width / 2) - (windowWidth / 2);
    const windowTop = (screen.height / 2) - (windowHeight / 2);

    // Open the window with the specified dimensions and position
    this.popupWindow = window.open(
      'http://localhost:4200/adduser',
      '_blank',
      `height=${windowHeight}, width=${windowWidth}, top=${windowTop}, left=${windowLeft}`
    );
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
