import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
describe('AppComponent', () => {
  /**
   * ng test --code-coverage
   * Gebera un reporte por achivo de los elementos que no se han probado en la carpeta coverage
   * ng test
   * Ejecuta cada una de las pruebas creadas
   */
  let appComponent: AppComponent;
  beforeEach(async () => {
    appComponent = new AppComponent(new FormBuilder());
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), ReactiveFormsModule],
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  // it(`should have as title 'TRONADOR'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('TRONADOR');
  // });
  /**
   * El siginte codigo muestar un ejemplo de evaluacion de una funcion que regresa un string.
   * @toBe evalua el tipo o respusta de la funcion a testear.
   */
  it('should return a string', () => {
    const answer = appComponent.mensaje('Henry');
    expect(typeof answer).toBe('string');
  });
  /**
   * El siginte codigo muestar un ejemplo de evaluacion de una funcion que regresa un string que contiene el nombre Henry
   * @toContain evalua si el retorno de la funcion contiene un valor especifico
   */
  it('should return a greeting with the name sent', () => {
    const name: string = 'Henry';
    const answer = appComponent.mensaje(name);
    expect(answer).toContain(name);
  });
  /**
   * Se evalua si el valor devuelto es un numero.
   * @toBe evalua el tipo o respusta de la funcion a testear.
   */
  it('should return 100 if the entered number is greater than 100', () => {
    const answer = appComponent.incrementar(300);
    expect(answer).toBe(100);
  });
  /**
   * Se evalua si el valor devuelto es un numero.
   * @toBe evalua el tipo o respusta de la funcion a testear.
   */
  it('It must return the number entered + 1, if it is not greater than 100', () => {
    const answer = appComponent.incrementar(50);
    expect(answer).toBe(51);
  });
  /**
   * Se evalua si el valor devuelto es un true.
   * @toBe evalua el tipo o respusta de la funcion a testear.
   */
  it('should return true', () => {
    const answer = appComponent.usuarioIngresado();
    expect(answer).toBe(true);
  });
  /**
   * Se evalua si el valor devuelto es un true.
   * @toBeTruthy evalua el tipo o respusta de la funcion a testear.
   */
  it('should return true, toBeTruthy', () => {
    const answer = appComponent.usuarioIngresado();
    expect(answer).toBeTruthy();
  });
  /**
   * Se evalua si el valor devuelto es un false.
   * @nottoBeTruthy evalua el tipo o respusta de la funcion a testear.
   */
  it('should return false, not.toBeTruthy', () => {
    const answer = !appComponent.usuarioIngresado();
    expect(answer).not.toBeTruthy();
  });
  /**
   * Se evalua si el valor devuelto tiene un largo de 3.
   * @toBe evalua el tipo o respusta de la funcion a testear.
   */
  it('must return at least 3 people', () => {
    const answer = appComponent.obtenerPersonas();
    expect(answer.length).toBe(3);
  });
  /**
   * Se evalua si el valor devuelto tiene un largo de 2.
   * @toBeGreaterThanOrEqual evalua el tipo o respusta de la funcion a testear.
   */
  it('must return at least 3 people, toBeGreaterThanOrEqual', () => {
    const answer = appComponent.obtenerPersonas();
    expect(answer.length).toBeGreaterThanOrEqual(2);
  });
  /**
   * Se evalua si el valor devuelto contiene Jorge o Juan.
   * @toContain evalua el tipo o respusta de la funcion a testear.
   */
  it('there must be Juan and Jorge', () => {
    const answer = appComponent.obtenerPersonas();
    expect(answer).toContain('Juan');
    expect(answer).toContain('Jorge');
  });
  /**
   * Existen 4 ciclos de vida para las pruebas .
   * beforeAll()
   * beforeEach()
   * afterAll()
   * afterEach()
   */
  // beforeAll(() => {});
  // beforeEach(() => {
  //   // appComponent.hp = 100;
  // });
  // afterAll(() => {});
  // afterEach(() => {
  //   // appComponent.hp = 100;
  // });
  /**
   * para saltar un test utilizamos un x al principio de la declaracion it --> xit
   */
  // xit('It should return 80 hp, if it takes 20 damage', () => {
  //   const answer = appComponent.recibeDanio(20);
  //   expect(answer).toBe(80);
  // });
  // xit('It should return 50 hp, if it takes 50 damage', () => {
  //   const answer = appComponent.recibeDanio(50);
  //   expect(answer).toBe(50);
  // });
  // xit('It should return 0 hp, if it takes 100 damage', () => {
  //   const answer = appComponent.recibeDanio(100);
  //   expect(answer).toBe(0);
  // });
  it('Must emit an event when the player takes damage', () => {
    let nuevoHP: number = 0;
    appComponent.hpCambia.subscribe((hp: number) => {
      nuevoHP = hp;
    });
    appComponent.recibeDanio(1000);
    expect(nuevoHP).toBe(0);
  });
  /**
   * Creando test con formularios
   */
  it('You need to create a form with two fields', () => {
    expect(appComponent.form.contains('email')).toBeTruthy();
    expect(appComponent.form.contains('password')).toBeTruthy();
  });
  it('email must be required', () => {
    const control = appComponent.form.get('email')!;
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('the email must be a valid email', () => {
    const control = appComponent.form.get('email')!;
    control.setValue('correo@test.com');
    expect(control.valid).toBeTruthy();
  });
  it('Debe de tener un router', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBeNull();
  });
});
