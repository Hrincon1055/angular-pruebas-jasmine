import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';

describe('MedicoComponent', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Debe de retornar el nombre del medico', () => {
    const nombre = 'Juan';
    const respuesta: string = component.saludarMedico(nombre);
    expect(respuesta).toContain(nombre);
  });
});
