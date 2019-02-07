import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreiranjeUputaComponent } from './kreiranje-uputa.component';

describe('KreiranjeUputaComponent', () => {
  let component: KreiranjeUputaComponent;
  let fixture: ComponentFixture<KreiranjeUputaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreiranjeUputaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreiranjeUputaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
