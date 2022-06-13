import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Curso } from '../core/modelos/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  arrCursos: Curso[] = []
  encabezados: string[] =  ["id", "nombre", "categoria", "fecha","clases"]
  encabezadosABM: string[] = ["id", "nombre", "categoria", "fecha","clases", "actions"]
  subscriptions!:Subscription;
  cursoAActualizar!: Curso
  
  constructor(private cursosServices: CursosService) { }

  ngOnInit(): void {
      this.obtenerCursos()
  }

  obtenerCursos(){
      this.subscriptions=new Subscription();
      this.subscriptions.add(this.cursosServices.getCursos().subscribe(cursos => this.arrCursos=cursos))
  }

  agregarCurso(e: any){
    let index=1;
    if(this.arrCursos.length>0){
      if(!e.id){
        index=this.arrCursos.length+1;
        e.id=index;
        this.arrCursos.push(e);
      }else{
        let index=this.arrCursos.findIndex((x:Curso)=>x.id===e.id);
        this.arrCursos[index]=e;
      }
      this.arrCursos = this.arrCursos.filter(stud => stud.id !== e.index) 
    }else{
      e.id=index;
      this.arrCursos.push(e)
      this.arrCursos = this.arrCursos.filter(stud => stud.id !== e.index)
    }
    this.cursosServices.cursoList = this.arrCursos
  }

  cursoAEditar(e:Curso){
    this.cursoAActualizar=e;
  }

  cursoAEliminar(e:Curso){
    this.arrCursos = this.arrCursos.filter(stud => stud.id !== e.id)
    this.cursosServices.cursoList = this.arrCursos;
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe()
}

}
