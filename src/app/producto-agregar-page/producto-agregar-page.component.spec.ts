import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoAgregarPageComponent } from './producto-agregar-page.component';

describe('ProductoAgregarPageComponent', () => {
  let component: ProductoAgregarPageComponent;
  let fixture: ComponentFixture<ProductoAgregarPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoAgregarPageComponent]
    });
    fixture = TestBed.createComponent(ProductoAgregarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
