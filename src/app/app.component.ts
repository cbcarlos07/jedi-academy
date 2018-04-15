import { Component } from '@angular/core';
import {Studant} from "./studant/studant.model";

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  /*title = 'jad'; */

  students : Studant[] = [
      { name : 'Luke', isJedi : true, temple : 'Coruscant' },
      { name : 'Leia', isJedi : false },
      { name : 'Han Solo', isJedi : false }
  ]

  /*luke = { name : 'Luke', isJedi : true, temple : 'Coruscant' }
  leia = { name : 'Leia', isJedi : false }
  han = { name : 'Han Solo', isJedi : false }*/
}
