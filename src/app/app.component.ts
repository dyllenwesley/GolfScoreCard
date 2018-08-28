import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  // template: `
  //   <div class="container">
  //     <nav class="navbar navbar-default">
  //       <a class="navbar-brand">{{pageTitle}}</a>
  //       <ul class="nav navbar-nav">
  //         <li><a>Select Course</a></li>
  //         <li><a>Select Tee</a></li>
  //       </ul>
  //     </nav>
  //     <div>
  //       <app-select-course></app-select-course>
  //     </div>
  //   </div>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Golf Wang';
}
