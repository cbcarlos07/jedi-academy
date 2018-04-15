import { Component, OnInit, Input } from '@angular/core';
import { Studant } from "./studant.model";

@Component({
  selector: 'jad-studant',
  templateUrl: './studant.component.html',
  styleUrls: ['./studant.component.css']
})
export class StudantComponent implements OnInit {
  /*@Input() name : string
  @Input() isJedi : boolean */
  @Input() studant : Studant
  constructor() { }

  ngOnInit() {
  }

  clicked(){
    console.log(`Student: ${this.studant.name}`)
  }

}
