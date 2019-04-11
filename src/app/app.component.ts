import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tictactoe';
  hidden:boolean = false;
   toggle() {
      this.hidden = !this.hidden;
      if(this.hidden) {
          document.getElementById('newGame').style.visibility = 'hidden';
          document.getElementById('board').style.visibility = 'visible';
      } else {
          document.getElementById('board').style.visibility = 'visible';
      }
    }
  }

