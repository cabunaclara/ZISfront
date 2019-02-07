import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kreiranje-uputa',
  templateUrl: './kreiranje-uputa.component.html',
  styleUrls: ['./kreiranje-uputa.component.css']
})
export class KreiranjeUputaComponent implements OnInit {

  ustanovaPosiljalac: string;
  ustanovaPrimalac: string;
  lekar: string;
  misljenje: string;
  specijalista: string;
  datum: string;
  oLice: string;

  constructor() { }

  ngOnInit() {
  }

  kreirajUput() {
    console.log(this.ustanovaPosiljalac);
    console.log(this.ustanovaPrimalac);
    console.log(this.oLice);
    console.log(this.misljenje);
    console.log(this.lekar);
    console.log(this.specijalista);
    console.log(this.datum);
  }

}
