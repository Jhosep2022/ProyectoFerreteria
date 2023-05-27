import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAgregarPageComponent } from './cliente-agregar-page.component';

describe('ClienteAgregarPageComponent', () => {
  let component: ClienteAgregarPageComponent;
  let fixture: ComponentFixture<ClienteAgregarPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteAgregarPageComponent]
    });
    fixture = TestBed.createComponent(ClienteAgregarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
