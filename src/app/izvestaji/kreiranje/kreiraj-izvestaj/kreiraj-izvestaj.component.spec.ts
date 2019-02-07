import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreirajIzvestajComponent } from './kreiraj-izvestaj.component';

describe('KreirajIzvestajComponent', () => {
  let component: KreirajIzvestajComponent;
  let fixture: ComponentFixture<KreirajIzvestajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreirajIzvestajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreirajIzvestajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
