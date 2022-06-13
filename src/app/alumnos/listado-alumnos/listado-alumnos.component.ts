import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Estudiante } from 'src/app/core/modelos/estudiante';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.scss']
})
export class ListadoAlumnosComponent implements OnInit {

  @Input() encabezados!: string[]
  @Input() arrAlumnos!: Estudiante[]

  @Output() alumnoParaEliminar = new EventEmitter<Estudiante>();
  @Output() alumnoParaEditar = new EventEmitter<Estudiante>(); 

  constructor() { }

  ngOnInit(): void {
  }
  deleteStudents(student: Estudiante){
    this.alumnoParaEliminar.next(student)
}

  editStudents(student: Estudiante){
    this.alumnoParaEditar.next(student)
}

}
