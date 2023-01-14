import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/users';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder,Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatDialogModule, MatDialog  } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showAddUserForm:boolean = false;
  showEditUserForm:boolean = true;
  loginForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    id: ['']
  });
  user:User = {
    email: '',
    password: '',
    name: '',
    id: ''
  }

  constructor(private login:LoginService , private matsnackbar:MatSnackBar ,private fb:FormBuilder, public dialogRef :  MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    

  }
  onSubmit(){
    // this.user = this.loginForm.value
    // this.(this.user);
  }

//   // check if user exists
//   checkUser(user:User){
//     this.login.postuser(user).subscribe(
//       res => {
//         console.log(res);
//         // localStorage.setItem('token',res.token);

//       },
//       err => console.log(err)
//     );
//     // this.closePopup();

//   }

}
