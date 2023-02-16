import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutermedicoComponent } from './routermedico.component';
import { Observable, Subject, empty } from 'rxjs';
class FakeRouter {
  navigate(params: any) {}
}
class FakeActivatedRoute {
  // params: Observable<any> = empty();
  private subject = new Subject();
  public push(valor: any) {
    this.subject.next(valor);
  }
  get params() {
    return this.subject.asObservable();
  }
}

describe('RoutermedicoComponent', () => {
  let component: RoutermedicoComponent;
  let fixture: ComponentFixture<RoutermedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutermedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutermedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireciona al medico', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });
  it('debe de colocar el id igual nuevo', () => {
    component = fixture.componentInstance;
    const activatedRout: FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRout.push({ id: 'nuevo' });
    expect(component.id).toBe('nuevo');
  });
});
