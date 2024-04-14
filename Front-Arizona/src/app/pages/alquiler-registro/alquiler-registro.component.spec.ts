import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerRegistroComponent } from './alquiler-registro.component';

describe('AlquilerRegistroComponent', () => {
  let component: AlquilerRegistroComponent;
  let fixture: ComponentFixture<AlquilerRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlquilerRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlquilerRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
