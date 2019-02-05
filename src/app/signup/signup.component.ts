import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  korisnickoIme: string;
  lozinka: string;
  ime: string;
  prezime: string;
  jmbg: string;


  constructor() {
    this.korisnickoIme = '';
    this.lozinka = '';
    this.prezime = '';
    this.ime = '';
    this.jmbg = '';
   }

  ngOnInit() {
  }

  registracija() {
    if (this.ime === '' || this.prezime === ''
    || this.jmbg === '' || this.korisnickoIme === ''
    || this.lozinka === '')  {
      alert('Popunite sva polja.');
      return;
    }

    if (this.jmbg.length !== 13) {
      alert('Neispravan jmbg!');
      return;
    }
    console.log(this.ime);
    console.log(this.prezime);
    console.log(this.jmbg);
    console.log(this.korisnickoIme);
    console.log(this.lozinka);
  }
}
