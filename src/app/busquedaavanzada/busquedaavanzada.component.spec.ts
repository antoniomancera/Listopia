import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaavanzadaComponent } from './busquedaavanzada.component';

describe('BusquedaavanzadaComponent', () => {
  let component: BusquedaavanzadaComponent;
  let fixture: ComponentFixture<BusquedaavanzadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaavanzadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaavanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
