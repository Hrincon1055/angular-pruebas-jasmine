import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MedicosComponent } from './espias/medicos.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';

@NgModule({
  declarations: [AppComponent, MedicosComponent, MedicoComponent],
  imports: [BrowserModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
