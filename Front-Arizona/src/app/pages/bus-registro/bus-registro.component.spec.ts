import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRegistroComponent } from './bus-registro.component';

describe('BusRegistroComponent', () => {
  let component: BusRegistroComponent;
  let fixture: ComponentFixture<BusRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
