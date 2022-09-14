import { Component, Output, EventEmitter} from '@angular/core';
import {Seccion} from '../../modelos/seccion';
@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {
  @Output() public salvar2 = new EventEmitter<Seccion>();


  public Secciones : Seccion = {
    inicialSeccion:'ninguna por el momento',
  }


  public nuevaSeccion(evento:Event):void{
    const elemento1 = evento.target as HTMLInputElement;
    this.Secciones.inicialSeccion = elemento1.value;
  }

  public guardarSeccion(evento:Event):void{
    const restaurar : Seccion = {...this.Secciones};
    this.salvar2.emit(restaurar);
    this.Secciones.inicialSeccion = '';
  }

}
