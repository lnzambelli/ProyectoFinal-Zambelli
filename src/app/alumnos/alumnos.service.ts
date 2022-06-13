import { Estudiante } from './../core/modelos/estudiante';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import listaDeEstudiantes from './../../assets/listadoDeEstudiantes.json';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  studentList: Estudiante[] = listaDeEstudiantes.estudiantes

  constructor() { }

  getStudents(): Observable<Estudiante[]>{
    return of(this.studentList)
  }
}
