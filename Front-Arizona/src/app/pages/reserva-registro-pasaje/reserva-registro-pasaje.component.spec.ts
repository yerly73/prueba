import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaRegistroPasajeComponent } from './reserva-registro-pasaje.component';

describe('ReservaRegistroPasajeComponent', () => {
  let component: ReservaRegistroPasajeComponent;
  let fixture: ComponentFixture<ReservaRegistroPasajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaRegistroPasajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaRegistroPasajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
