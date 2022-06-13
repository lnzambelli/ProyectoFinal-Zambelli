import { Estudiante } from './../core/modelos/estudiante';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlumnosService } from './alumnos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit, OnDestroy {

  arrAlumnos: Estudiante[] = []
  encabezados: string[] = ["id", "nombre","dni", "email", "tienePermisoAdmin"]
  encabezadosABM: string[] = ["id", "nombre","dni", "email", "tienePermisoAdmin", "actions"]
  subscriptions!:Subscription;
  estudianteAActualizar!: Estudiante
  
  constructor(private alumnosServices: AlumnosService) { }

  ngOnInit(): void {
      this.obtenerAlumnos()
  }

  obtenerAlumnos(){
      this.subscriptions=new Subscription();
      this.subscriptions.add(this.alumnosServices.getStudents().subscribe(alumnos => this.arrAlumnos=alumnos))
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

  alumnoAEditar(e:Estudiante){
    this.estudianteAActualizar=e;
  }

  alumnoAEliminar(e:Estudiante){
    this.arrAlumnos = this.arrAlumnos.filter(stud => stud.id !== e.id)
    this.alumnosServices.studentList = this.arrAlumnos;
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }

}
