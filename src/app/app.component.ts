import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Humedales';
  //remove token when closing app tab
  // @HostListener('window:beforeunload', ['$event'])
  // beforeunloadHandler(event: Event) {
  //   localStorage.removeItem('token');
  // }

}
