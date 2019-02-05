import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreirajReceptComponent } from './kreiraj-recept.component';

describe('KreirajReceptComponent', () => {
  let component: KreirajReceptComponent;
  let fixture: ComponentFixture<KreirajReceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreirajReceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreirajReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
