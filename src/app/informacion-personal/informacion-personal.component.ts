import { CursosService } from './../cursos/cursos.service';
import { AlumnosService } from './../alumnos/alumnos.service';
import { Estudiante } from './../core/modelos/estudiante';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Curso } from '../core/modelos/curso';


@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.scss']
})
export class InformacionPersonalComponent implements OnInit {

  subscriptions!:Subscription;
  arrAlumnos: Estudiante[] = []
  arrCursos: Curso[] = []
  alumnoIngresado!: Estudiante


  constructor(private alumnosServices: AlumnosService, private cursosServices: CursosService ) { }

  ngOnInit(): void {
    this.obtenerAlumnos()
    this.obtenerCursos()
    this.obtenerAlumnoIngresado()
  }

  obtenerAlumnos(){
    this.subscriptions=new Subscription();
    this.subscriptions.add(this.alumnosServices.getStudents().subscribe(alumnos => this.arrAlumnos=alumnos))
  }

  obtenerAlumnoIngresado(){
    let encontrado = this.arrAlumnos.find(alum => alum.nombre == sessionStorage.getItem('usuario'))
    if (encontrado)
    this.alumnoIngresado=encontrado
  }

  obtenerCursos(){
    this.subscriptions=new Subscription();
    this.subscriptions.add(this.cursosServices.getCursos().subscribe(cursos => this.arrCursos=cursos))
  }

  agregar(curso: string){
    if(!this.alumnoIngresado.inscripciones.includes(curso))
    this.alumnoIngresado.inscripciones.push(curso)
  }

  quitar(curso: String){
    this.alumnoIngresado.inscripciones= this.alumnoIngresado.inscripciones.filter(curs => curs!=curso)
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }

  agregarAlumno(e: any){
    let index=1;
    if(this.arrAlumnos.length>0){
      if(!e.id){
        index=this.arrAlumnos.length+1;
        e.id=index;
        this.arrAlumnos.push(e);
      }else{
        let index=this.arrAlumnos.findIndex((x:Estudiante)=>x.id===e.id);
        this.arrAlumnos[index]=e;
      }
      this.arrAlumnos = this.arrAlumnos.filter(stud => stud.id !== e.index) 
    }else{
      e.id=index;
      this.arrAlumnos.push(e)
      this.arrAlumnos = this.arrAlumnos.filter(stud => stud.id !== e.index)
    }
    this.alumnosServices.studentList = this.arrAlumnos
  }


}
