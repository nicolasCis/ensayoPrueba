import { Component } from '@angular/core';
import { Alumnos} from './modelos/alumnos'
import {Seccion} from './modelos/seccion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ensayoPrueba';
  public guardarAlumnos(nuevo:Alumnos):void{
    this.listarAlumnos.push(nuevo);
  }

  public guardarSeccion(nuevo:Seccion):void{
    this.listarSeccion.push(nuevo);
  }

  public listarAlumnos : Array<Alumnos>=[
    {
      foto:'',
      nombreAlumno:'',
      apellidoAlumno:'',
      rutAlumno: 0,
      edadAlumno: 0,
      seccion:'P1101'
    }
  ]
  public imagenSeleccionada:String=''

  public escucharImg(evento:Event):void{
    const ele = evento.target as HTMLInputElement;
    this.imagenSeleccionada=ele.value;
  }


  public listarSeccion : Array<Seccion>=[
    {
      inicialSeccion:'',
    }
  ]
}
