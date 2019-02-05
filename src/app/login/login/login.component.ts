import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  korisnickoIme: string;
  lozinka: string;

  constructor() {
    this.korisnickoIme = '';
    this.lozinka = '';
  }

  ngOnInit() {
  }

  prijava() {
    if (this.korisnickoIme === '' || this.lozinka === '') {
      alert('Popunite sva polja');
      return;
    }
    console.log(this.korisnickoIme);
    console.log(this.lozinka);
  }
}
