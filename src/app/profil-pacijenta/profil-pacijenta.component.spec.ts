import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPacijentaComponent } from './profil-pacijenta.component';

describe('ProfilPacijentaComponent', () => {
  let component: ProfilPacijentaComponent;
  let fixture: ComponentFixture<ProfilPacijentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilPacijentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPacijentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
