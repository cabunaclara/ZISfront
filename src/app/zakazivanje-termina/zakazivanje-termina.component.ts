import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zakazivanje-termina',
  templateUrl: './zakazivanje-termina.component.html',
  styleUrls: ['./zakazivanje-termina.component.css']
})
export class ZakazivanjeTerminaComponent implements OnInit {

  izabranLekar: boolean;
  datumPregleda: Date;

  constructor() { }

  ngOnInit() {
  }

  zakazi(): void {}

}
