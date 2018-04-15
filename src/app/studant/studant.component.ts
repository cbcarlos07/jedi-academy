import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-studant',
  templateUrl: './studant.component.html',
  styleUrls: ['./studant.component.css']
})
export class StudantComponent implements OnInit {
  name : string = 'Luke'
  isJedi : boolean = true
  constructor() { }

  ngOnInit() {
  }

}
