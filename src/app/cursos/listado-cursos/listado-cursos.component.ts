import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Curso } from 'src/app/core/modelos/curso';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.scss']
})
export class ListadoCursosComponent implements OnInit {

  @Input() encabezados!: string[]
  @Input() arrCursos!: Curso[]

  @Output() cursoParaEliminar = new EventEmitter<Curso>();
  @Output() cursoParaEditar = new EventEmitter<Curso>(); 

  constructor() { }

  ngOnInit(): void {
  }
  deleteCurso(curso: Curso){
    this.cursoParaEliminar.next(curso)
}

  editCurso(curso: Curso){
    this.cursoParaEditar.next(curso)
}

}
