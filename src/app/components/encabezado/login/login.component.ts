import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/users';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showAddUserForm: boolean = false;
  showEditUserForm: boolean = true;
  loginForm = this.fb.group({
    password: ['', Validators.required],
    email: ['', Validators.required],
    id: [''],
  });
  user: User = {
    email: '',
    password: '',
    name: '',
    id: '',
  };
  token: any;

  constructor(
    private login: LoginService,
    private matsnackbar: MatSnackBar,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    this.user = this.loginForm.value;
    console.log(this.user);
    this.checkUser(this.user);
  }

  // check if user exists
  checkUser(user: User) {
    console.log('usuario que estoy mandando', user);
    this.login.postuser(user).subscribe(
      (res) => {
        console.log(res);
        console.log(res)
        this.token = res
        localStorage.setItem('token',this.token.token);
        localStorage.setItem('name',this.token.user[0].name.S);
        this.matsnackbar.open('Bienvenido', 'Cerrar', { duration: 2000 });
        this.closePopup();
      },
      (err) => {
        console.log(err);
        this.matsnackbar.open('Usuario o contraseña incorrectos', 'Cerrar', { duration: 2000 });
      }
    );

    // 
  }
  closePopup() {
    this.dialogRef.close();
    location.reload();
  }
}
