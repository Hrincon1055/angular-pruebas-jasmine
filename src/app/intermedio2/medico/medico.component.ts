import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'],
})
export class MedicoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public saludarMedico(nombre: string): string {
    return `Hola ${nombre}`;
  }
}
