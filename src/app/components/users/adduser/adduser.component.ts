import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/users';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder,Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  popupWindow: Window | null = null;
  showAddUserForm:boolean = false;
  showEditUserForm:boolean = true;
  addUserForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    id: ['']
  });
  count:any=0;
  user:User = {
    email: '',
    password: '',
    name: '',
    id: ''
  }
  constructor( private formsmodule:FormsModule ,private usersservice:UsersService,private fb:FormBuilder, private matformfield:MatFormFieldModule) { }

  ngOnInit(): void {
    this.getCount();

    // form
  }
  onSubmit(){
    this.user = this.addUserForm.value
    this.addUser(this.user);
  }
  addUser(user:User){
    user = this.addUserForm.value
    user.id = this.count+1;
    console.log("usuario que estoy mandando",user);
    this.usersservice.saveUser(user).subscribe(
      res => {
        console.log(res);
        
        this.closePopup();
      },
      err => console.log(err)
    );
  }
  closePopup(){
    
    this.popupWindow?.close();
  }
  getusers(){
    this.usersservice.getUsers().subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );

  }
  getCount(){
    this.usersservice.getcount().subscribe(
      res => {
        console.log(res);
        this.count=res;
      },
      err => console.log(err)
    );
  }

  // read the las user id and add 1 to it
}