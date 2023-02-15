import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'],
})
export class MedicoComponent implements OnInit {
  public medicos: any[] = [];
  constructor(private _medicoService: MedicoService) {}

  ngOnInit(): void {}
  public saludarMedico(nombre: string): string {
    return `Hola ${nombre}`;
  }
  public getMedicos() {
    this._medicoService.getMedicos().subscribe((medicos: any[]) => {
      this.medicos = medicos;
    });
  }
}
