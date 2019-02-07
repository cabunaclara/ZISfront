import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kreiraj-izvestaj',
  templateUrl: './kreiraj-izvestaj.component.html',
  styleUrls: ['./kreiraj-izvestaj.component.css']
})
export class KreirajIzvestajComponent implements OnInit {

  oLice: string;
  lekar: string;
  anamneza: string;
  dijagnoza: string;
  terapija: string;
  datum: string;

  constructor() { }

  ngOnInit() {
  }

  kreirajIzvestaj() {
    console.log(this.oLice);
    console.log(this.lekar);
    console.log(this.datum);
    console.log(this.anamneza);
    console.log(this.terapija);
    console.log(this.dijagnoza);
  }
}
