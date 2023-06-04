import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/users';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EdituserComponent implements OnInit {
  updateForm: FormGroup;
  resetPasswordClicked: boolean = false;
  param: any;
  // id:string;
  // name:string;
  // password:string;
  // email:string;
  user: User = {
    email: '',
    password: '',
    NewPassword: '',
    name: '',
    id: '',
  };
  constructor(
    private route: ActivatedRoute,
    private matsnackbar: MatSnackBar,
    private formBuilder: FormBuilder,
    private usersservice: UsersService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EdituserComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.updateForm = this.formBuilder.group({
      password: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      id: [data.id, Validators.required],
      name: [data.name, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
    });
  }
  get formControls() {
    return this.updateForm.controls;
  }
  onSubmit() {
    if (this.updateForm.invalid) {
      return;
    }
    this.user.id = this.updateForm.value.id;
    this.user.name = this.updateForm.value.name;
    this.user.email = this.updateForm.value.email;
    this.user.password = this.updateForm.value.password;
    this.user.NewPassword = this.updateForm.value.newPassword;
    this.edituser();
  }

  ngOnInit(): void {
    this.getuser();
  }
  getuser() {
    this.param = this.route.snapshot.paramMap.get('id');
    this.usersservice.getUserById(this.param).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  edituser() {
    console.log(this.user);
    this.usersservice.updateUser(this.param, this.user).subscribe(
      (res) => {
        const data = JSON.parse(JSON.stringify(res));
        this.matsnackbar.open(data.message, 'Close', {
          duration: 2000,
        });
        //if res status is 200 then close popup
        setInterval(() => {
          this.dialogRef.close();
        }
          , 2000);

      },
      (err) => {
        console.log(err);
        //show error message from backend
        this.matsnackbar.open(err.error, 'Close', {
          duration: 2000,
        });
      }
    );
    //ir not err then close popup

  
  }
  closePopup() {
    // close dialogreff and pass message to parent component
    this.dialogRef.close('Usuarion actualizado');
  }
  onResetPassword() {
    this.usersservice.resetuserpassword(this.param, this.user).subscribe(
      (res) => {
        console.log(res);
        this.matsnackbar.open('Password Reset Successfully', 'Close', {
          duration: 2000,
        });
        setInterval(() => {
          this.dialogRef.close();
        }
          , 2000);


      },
      (err) => console.log(err)
    );

    this.resetPasswordClicked = true;
  }
}
