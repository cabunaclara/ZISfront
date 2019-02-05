import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-izbor-lekara',
  templateUrl: './izbor-lekara.component.html',
  styleUrls: ['./izbor-lekara.component.css']
})
export class IzborLekaraComponent implements OnInit {

  izabran: boolean;
  noviLekar: string;
  prethodniLekar: string;
  razlogPromene: string;
  tipObrasca: string;
  nazivUstanove: string;

  constructor() { }

  ngOnInit() {
  }

  izbor(): void {}

}
