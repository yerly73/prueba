import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPasajerosPasajeComponent } from './lista-pasajeros-pasaje.component';

describe('ListaPasajerosPasajeComponent', () => {
  let component: ListaPasajerosPasajeComponent;
  let fixture: ComponentFixture<ListaPasajerosPasajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPasajerosPasajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPasajerosPasajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
