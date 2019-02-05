import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzborLekaraComponent } from './izbor-lekara.component';

describe('IzborLekaraComponent', () => {
  let component: IzborLekaraComponent;
  let fixture: ComponentFixture<IzborLekaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzborLekaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzborLekaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
