import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedapeliculasComponent } from './busquedapeliculas.component';

describe('BusquedapeliculasComponent', () => {
  let component: BusquedapeliculasComponent;
  let fixture: ComponentFixture<BusquedapeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedapeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedapeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
