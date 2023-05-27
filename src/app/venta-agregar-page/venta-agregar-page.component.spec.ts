import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaAgregarPageComponent } from './venta-agregar-page.component';

describe('VentaAgregarPageComponent', () => {
  let component: VentaAgregarPageComponent;
  let fixture: ComponentFixture<VentaAgregarPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaAgregarPageComponent]
    });
    fixture = TestBed.createComponent(VentaAgregarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
