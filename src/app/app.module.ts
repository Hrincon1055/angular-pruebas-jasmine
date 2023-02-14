import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MedicosComponent } from './espias/medicos.component';

@NgModule({
  declarations: [AppComponent, MedicosComponent],
  imports: [BrowserModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
