import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login/login.component';
import { KreirajReceptComponent } from './recepti/kreiranje/kreiraj-recept/kreiraj-recept.component';
import { IzborLekaraComponent } from './izbor-lekara/izbor-lekara.component';
import { ZakazivanjeTerminaComponent } from './zakazivanje-termina/zakazivanje-termina.component';
import { ProfilPacijentaComponent } from './profil-pacijenta/profil-pacijenta.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    KreirajReceptComponent,
    IzborLekaraComponent,
    ZakazivanjeTerminaComponent,
    ProfilPacijentaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'login', component: LoginComponent},
      {path: 'kreirajRecept', component: KreirajReceptComponent},
      {path: 'izborLekara', component: IzborLekaraComponent},
      {path: 'zakazivanje', component: ZakazivanjeTerminaComponent},
      {path: '', redirectTo: '/welcome', pathMatch: 'full'},
      { path: '**', component: WelcomeComponent, pathMatch : 'full'}
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
