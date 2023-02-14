import { Component, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
  public title: string = 'TRONADOR';
  public hp: number;
  public hpCambia = new EventEmitter<number>();
  public form: FormGroup;
  constructor(_fb: FormBuilder) {
    this.hp = 100;
    this.form = _fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {}
  public mensaje(name: string): string {
    return `Saludos ${name}`;
  }
  public incrementar(number: number): number {
    if (number > 100) {
      return 100;
    } else {
      return number + 1;
    }
  }
  public usuarioIngresado(): boolean {
    return true;
  }
  public obtenerPersonas(): string[] {
    return ['Juan', 'Carlos', 'Jorge'];
  }
  public recibeDanio(danio: number): void {
    if (danio >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - danio;
    }
    this.hpCambia.emit(this.hp);
  }
}
