import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showFiller = false;
  @Input() isloggedin!:boolean;
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
