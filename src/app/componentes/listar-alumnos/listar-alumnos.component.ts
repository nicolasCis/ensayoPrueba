import { Component, Input} from '@angular/core';
import {  Alumnos} from '../../modelos/alumnos';
@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.scss']
})
export class ListarAlumnosComponent {
  @Input() public alumno!: Array<Alumnos>;



}
