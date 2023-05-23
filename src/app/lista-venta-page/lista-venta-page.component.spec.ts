import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVentaPageComponent } from './lista-venta-page.component';

describe('ListaVentaPageComponent', () => {
  let component: ListaVentaPageComponent;
  let fixture: ComponentFixture<ListaVentaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVentaPageComponent]
    });
    fixture = TestBed.createComponent(ListaVentaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
