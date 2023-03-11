import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/users';
import { FormBuilder,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
param:any;
id:string;
name:string;
password:string;
email:string;
user:User = {
    email: '',
    password: '',
    name: '',
    id: ''
  }
  constructor( private route: ActivatedRoute, private matsnackbar:MatSnackBar ,private usersservice:UsersService,private fb:FormBuilder, public dialogRef :  MatDialogRef<EdituserComponent>, @Inject(MAT_DIALOG_DATA) data:any) {this.name = data.name; this.id = data.id; this.email = data.email; this.password = data.password;}

  ngOnInit(): void {
    this.user.email = this.email;
    this.user.name = this.name;
    this.user.password = this.password;
    this.user.id = this.id;
    this.getuser();
  }
  getuser(){
    this.param = this.route.snapshot.paramMap.get('id');
    this.usersservice.getUserById(this.param).subscribe(
      res => {
        console.log(res);

      },
      err => console.log(err)
    );
  }
  edituser(){
    this.usersservice.updateUser(this.param,this.user).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
    //this.closePopup();
  }
  closePopup(){
    this.dialogRef.close();
    location.reload();
  }
}
