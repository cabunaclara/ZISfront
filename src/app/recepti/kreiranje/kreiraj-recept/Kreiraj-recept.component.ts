import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-kreiraj-recept',
  templateUrl: './kreiraj-recept.component.html',
  styleUrls: ['./kreiraj-recept.component.css']
})
export class KreirajReceptComponent implements OnInit {

  ustanova: string;
  prezimePacijent: string;
  imePacijent: string;
  participacija: number;
  datumPacijent: string;
  brKnjizice: string;
  datumLek: string;
  brKarton: string;
  sifraLeka: string;
  sifraDijagnoze: string;
  terapija: string;

  // TODO srediti id lekara treba da bude tekuci dr
  constructor() {
    this.ustanova = '';
    this.prezimePacijent = '';
    this.imePacijent = '';
    this.participacija = 0;

  }

  kreirajRecept() {
    console.log(this.ustanova);
    console.log(this.prezimePacijent);
    console.log(this.imePacijent);
    console.log(this.datumPacijent);
    console.log(this.brKnjizice);
    console.log(this.datumLek);
    console.log(this.brKarton);
    console.log(this.participacija);
    console.log(this.terapija);
    console.log(this.sifraLeka);
    console.log(this.sifraDijagnoze);
  }

  ngOnInit() {

  }
}
