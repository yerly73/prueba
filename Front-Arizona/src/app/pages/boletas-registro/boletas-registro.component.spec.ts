import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletasRegistroComponent } from './boletas-registro.component';

describe('BoletasRegistroComponent', () => {
  let component: BoletasRegistroComponent;
  let fixture: ComponentFixture<BoletasRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletasRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletasRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
