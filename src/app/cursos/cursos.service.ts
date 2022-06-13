import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Curso } from '../core/modelos/curso';
import listaDeCursos from './../../assets/listadoDeCursos.json';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursoList: Curso[] = listaDeCursos.courses

  constructor() { }

  getCursos(): Observable<Curso[]>{
    return of(this.cursoList)
  }
}
