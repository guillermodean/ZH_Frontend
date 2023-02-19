import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showFiller = false;
  isloggedin:boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.isloggedin = true;
    }
    else{
      this.isloggedin = false;
    }
    console.log("sidenav",this.isloggedin)
  }
  

}
