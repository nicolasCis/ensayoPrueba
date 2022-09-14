import { Component, Output, EventEmitter, Input} from '@angular/core';
import {Alumnos, Secciones} from '../../modelos/alumnos';
import {Seccion} from '../../modelos/seccion';
@Component({
  selector: 'app-formulario-alumnos',
  templateUrl: './formulario-alumnos.component.html',
  styleUrls: ['./formulario-alumnos.component.scss']
})
export class FormularioAlumnosComponent {
  @Output() public salvar = new EventEmitter<Alumnos>();
  @Input() public lista : Array<Seccion> = [];
  public alumnos : Alumnos ={
    foto:'',
    nombreAlumno:'',
    apellidoAlumno:'',
    rutAlumno: 0,
    edadAlumno: 0,
    seccion:'P1101',
  }
  public Secciones : Seccion = {
    inicialSeccion:'',
  }

  public foto(evento:Event):void{
    const elemento0 = evento.target as HTMLInputElement;
    this.alumnos.foto = elemento0.value;
  }


  public nuevoNombre(evento : Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.alumnos.nombreAlumno = elemento.value;
  }

  public nuevoApellido(evento : Event):void{
    const elemento2 = evento.target as HTMLInputElement;
    this.alumnos.apellidoAlumno = elemento2.value;
  }

  public nuevaEdad(evento : Event): void{
    const elemento3 = evento.target as HTMLInputElement;
    this.alumnos.edadAlumno = Number.parseInt(elemento3.value);
  }

  public nuevoRut(evento:Event):void{
    const elemento4 = evento.target as HTMLInputElement;
    this.alumnos.rutAlumno = Number.parseInt(elemento4.value);
  }

  public cambiarOpc(evento : Event):void{
    const elemento5 = evento.target as HTMLSelectElement;
    this.alumnos.seccion = elemento5.value as Secciones;
  }

  public guardar(evento : Event):void{
    const copia : Alumnos = {...this.alumnos};
    this.salvar.emit(copia);
    this.alumnos.foto='';
    this.alumnos.nombreAlumno='';
    this.alumnos.apellidoAlumno='';
    this.alumnos.rutAlumno=0;
    this.alumnos.edadAlumno=0;
    this.alumnos.seccion== this.Secciones.inicialSeccion;
  }


}
