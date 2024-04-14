import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomiendaRegistroComponent } from './encomienda-registro.component';

describe('EncomiendaRegistroComponent', () => {
  let component: EncomiendaRegistroComponent;
  let fixture: ComponentFixture<EncomiendaRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncomiendaRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncomiendaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
