import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EMPTY, empty, from, throwError } from 'rxjs';

import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  let medicosService: MedicosService;
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('HttpClient', {
      post: from([]),
      get: from([]),
    });
    medicosService = new MedicosService(spy);
    componente = new MedicosComponent(medicosService);
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });
  it('Debe de cargar los medicos', () => {
    spyOn(medicosService, 'getMedicos').and.callFake(() => {
      return from([['Medico 1', 'Medico 2', 'Medico 3']]);
    });
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });
  it('Debe de llamar el servicio de agregar  medico', () => {
    const espia = spyOn(medicosService, 'agregarMedico').and.callFake(
      (medico) => {
        return empty();
      }
    );
    componente.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });
  it('Debe de agregar un nuevo médico al arreglo de medicos', () => {
    const medico = { id: 1, nombre: 'Juan' };
    spyOn(medicosService, 'agregarMedico').and.returnValue(from([medico]));
    componente.agregarMedico();
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });
  it('Si falla la adicion, lapropiedad mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'Nose pudo agregar el médico';
    spyOn(medicosService, 'agregarMedico').and.returnValue(throwError(miError));
    componente.agregarMedico();
    expect(componente.mensajeError).toBe(miError);
  });
  it('Debe de llamar al servidor para borrar el medico', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const espia = spyOn(medicosService, 'borrarMedico').and.returnValue(
      empty()
    );
    componente.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');
  });
  it('No debe de llamar al servidor para borrar el medico', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const espia = spyOn(medicosService, 'borrarMedico').and.returnValue(
      empty()
    );
    componente.borrarMedico('1');
    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
