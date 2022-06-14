import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/core/modelos/estudiante';

@Component({
  selector: 'app-formulario-actualizacion',
  templateUrl: './formulario-actualizacion.component.html',
  styleUrls: ['./formulario-actualizacion.component.scss']
})
export class FormularioActualizacionComponent {

  @Input() estudianteAActualizar!: Estudiante;
  @Output() alumnoAgregado = new EventEmitter<Estudiante>(); 

  estaCreando: boolean = false;
  createForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.estaCreando = false;

    this.createForm = this.fb.group({
      nombre:['', Validators.required],
      dni:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tienePermisoAdmin: ['', [Validators.required]],
      inscripciones:  [[]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!changes.studentToEdit){
      this.createForm.get('nombre')?.patchValue(this.estudianteAActualizar.nombre);
      this.createForm.get('dni')?.patchValue(this.estudianteAActualizar.dni);
      this.createForm.get('email')?.patchValue(this.estudianteAActualizar.email);
      this.createForm.get('tienePermisoAdmin')?.patchValue(this.estudianteAActualizar.tienePermisoAdmin);
    }
  }
  
  onSubmit(): void {
    this.estaCreando = true;
    if(!this.estudianteAActualizar){
     
    }else{
      this.createForm.value['id']=this.estudianteAActualizar.id
      let vendedorEdited=this.createForm.value;
      this.alumnoAgregado.emit(vendedorEdited)
      sessionStorage.setItem('usuario', vendedorEdited.nombre)
    }
    setTimeout(() => {
      this.estaCreando = false;
    }, 1000);
  }

}
