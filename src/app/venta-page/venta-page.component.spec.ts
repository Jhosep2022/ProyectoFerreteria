import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaPageComponent } from './venta-page.component';

describe('VentaPageComponent', () => {
  let component: VentaPageComponent;
  let fixture: ComponentFixture<VentaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaPageComponent]
    });
    fixture = TestBed.createComponent(VentaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
