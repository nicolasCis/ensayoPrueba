import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { ListarAlumnosComponent } from './componentes/listar-alumnos/listar-alumnos.component';
import { FormularioAlumnosComponent } from './componentes/formulario-alumnos/formulario-alumnos.component';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';
import { ListarSeccionComponent } from './componentes/listar-seccion/listar-seccion.component';
import { SeccionComponent } from './componentes/seccion/seccion.component';
import { MostrarFotoComponent } from './componentes/mostrar-foto/mostrar-foto.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ListarAlumnosComponent,
    FormularioAlumnosComponent,
    FormularioSeccionComponent,
    ListarSeccionComponent,
    SeccionComponent,
    MostrarFotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
