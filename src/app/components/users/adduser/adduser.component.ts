import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/users';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  popupWindow: Window | null = null;
  showAddUserForm:boolean = false;
  showEditUserForm:boolean = true;
  user:User = {
    email: '',
    password: '',
    name: '',
    _id: ''
  }
  constructor( private usersservice:UsersService, private matformfield:MatFormFieldModule) { }

  ngOnInit(): void {

    // form
  }

  addUser(){
    this.usersservice.saveUser(this.user).subscribe(
      res => {
        console.log(res);
        // this.getUsers();
        this.closePopup();
      },
      err => console.log(err)
    );
  }
  closePopup(){
    
    this.popupWindow?.close();
  }

  }
