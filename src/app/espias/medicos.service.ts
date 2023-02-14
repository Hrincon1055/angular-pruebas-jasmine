import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class MedicosService {
  constructor(private http: HttpClient) {}

  getMedicos(): Observable<any> {
    return this.http.get('...').pipe(map((resp: any) => resp['medicos']));
  }

  agregarMedico(medico: any) {
    return this.http
      .post('...', medico)
      .pipe(map((resp: any) => resp['medico']));
  }

  borrarMedico(id: string) {
    return this.http.delete('...').pipe(map((resp: any) => resp['medico']));
  }
}
