"use strict";(self.webpackChunkpf_zambelli=self.webpackChunkpf_zambelli||[]).push([[618],{7618:(S,g,r)=>{r.r(g),r.d(g,{InformacionPersonalModule:()=>N});var c=r(8583),f=r(6983),p=r(5319),o=r(7716),C=r(5005),v=r(449),m=r(3738),a=r(3679),u=r(8295),A=r(9983),h=r(1095);function T(n,i){1&n&&(o.TgZ(0,"mat-error"),o._uU(1," El nombre es "),o.TgZ(2,"strong"),o._uU(3,"requerido"),o.qZA(),o.qZA())}function I(n,i){1&n&&(o.TgZ(0,"mat-error"),o._uU(1," El DNI es "),o.TgZ(2,"strong"),o._uU(3,"requerido"),o.qZA(),o.qZA())}function b(n,i){1&n&&(o.TgZ(0,"mat-error"),o._uU(1," El email es "),o.TgZ(2,"strong"),o._uU(3,"requerido"),o.qZA(),o.qZA())}function _(n,i){1&n&&(o.TgZ(0,"mat-error"),o._uU(1," El email tiene formato "),o.TgZ(2,"strong"),o._uU(3,"incorrecto"),o.qZA(),o.qZA())}let F=(()=>{class n{constructor(t){this.fb=t,this.alumnoAgregado=new o.vpe,this.estaCreando=!1,this.estaCreando=!1,this.createForm=this.fb.group({nombre:["",a.kI.required],dni:["",a.kI.required],email:["",[a.kI.required,a.kI.email]]})}ngOnChanges(t){var e,s,l;t.studentToEdit||(null===(e=this.createForm.get("nombre"))||void 0===e||e.patchValue(this.estudianteAActualizar.nombre),null===(s=this.createForm.get("dni"))||void 0===s||s.patchValue(this.estudianteAActualizar.dni),null===(l=this.createForm.get("email"))||void 0===l||l.patchValue(this.estudianteAActualizar.email))}onSubmit(){if(this.estaCreando=!0,this.estudianteAActualizar){this.createForm.value.id=this.estudianteAActualizar.id,this.createForm.value.tienePermisoAdmin=this.estudianteAActualizar.tienePermisoAdmin,this.createForm.value.inscripciones=this.estudianteAActualizar.inscripciones;let t=this.createForm.value;this.alumnoAgregado.emit(t),sessionStorage.setItem("usuario",t.nombre)}setTimeout(()=>{this.estaCreando=!1},1e3)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(a.qu))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-formulario-actualizacion"]],inputs:{estudianteAActualizar:"estudianteAActualizar"},outputs:{alumnoAgregado:"alumnoAgregado"},features:[o.TTD],decls:20,vars:6,consts:[["novalidate","",1,"formStudents",3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],[1,"full-width"],["matInput","","placeholder","Nombre","formControlName","nombre"],[4,"ngIf"],["matInput","","placeholder","DNI","formControlName","dni"],[1,"col","contentButton"],[1,"full-width2"],["matInput","","placeholder","Email","formControlName","email"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(t,e){1&t&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return e.onSubmit()}),o.TgZ(1,"mat-card"),o.TgZ(2,"mat-card-content"),o.TgZ(3,"div",1),o.TgZ(4,"div",2),o.TgZ(5,"mat-form-field",3),o._UZ(6,"input",4),o.YNc(7,T,4,0,"mat-error",5),o.qZA(),o.TgZ(8,"mat-form-field",3),o._UZ(9,"input",6),o.YNc(10,I,4,0,"mat-error",5),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"div",1),o.TgZ(12,"div",7),o.TgZ(13,"mat-form-field",8),o._UZ(14,"input",9),o.YNc(15,b,4,0,"mat-error",5),o.YNc(16,_,4,0,"mat-error",5),o.qZA(),o.TgZ(17,"mat-card-actions",8),o.TgZ(18,"button",10),o._uU(19,"Actualizar"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.Q6J("formGroup",e.createForm),o.xp6(7),o.Q6J("ngIf",e.createForm.controls.nombre.hasError("required")),o.xp6(3),o.Q6J("ngIf",e.createForm.controls.dni.hasError("required")),o.xp6(5),o.Q6J("ngIf",e.createForm.controls.email.hasError("required")),o.xp6(1),o.Q6J("ngIf",e.createForm.controls.email.hasError("email")),o.xp6(2),o.Q6J("disabled",e.createForm.invalid))},directives:[a._Y,a.JL,a.sg,m.a8,m.dn,u.KE,A.Nt,a.Fj,a.JJ,a.u,c.O5,m.hq,h.lW,u.TO],styles:[""]}),n})();var d=r(7746),P=r(1769),Z=r(6627);function q(n,i){if(1&n){const t=o.EpF();o.TgZ(0,"mat-list-item",8),o.NdJ("click",function(){const l=o.CHM(t).$implicit;return o.oxw().agregar(l.nombre)}),o._uU(1),o.TgZ(2,"mat-icon"),o._uU(3," arrow_right"),o.qZA(),o._UZ(4,"mat-divider"),o.qZA()}if(2&n){const t=i.$implicit;o.xp6(1),o.hij(" ",t.nombre," ")}}function x(n,i){if(1&n){const t=o.EpF();o.TgZ(0,"mat-list-item",8),o.NdJ("click",function(){const l=o.CHM(t).$implicit;return o.oxw().quitar(l)}),o.TgZ(1,"mat-icon"),o._uU(2,"arrow_left"),o.qZA(),o._uU(3),o._UZ(4,"mat-divider"),o.qZA()}if(2&n){const t=i.$implicit;o.xp6(3),o.hij(" ",t," ")}}const z=[{path:"",component:(()=>{class n{constructor(t,e){this.alumnosServices=t,this.cursosServices=e,this.arrCursos=[]}ngOnInit(){this.obtenerAlumnos(),this.obtenerCursos()}obtenerAlumnos(){this.subscriptions=new p.w,this.subscriptions.add(this.alumnosServices.getUsersList().subscribe(t=>{let e=t.find(s=>s.nombre==sessionStorage.getItem("usuario"));e&&(this.alumnoIngresado=e)}))}obtenerAlumnoIngresado(){let t=this.arrAlumnos.find(e=>e.nombre==sessionStorage.getItem("usuario"));t&&(this.alumnoIngresado=t)}obtenerCursos(){this.subscriptions=new p.w,this.subscriptions.add(this.cursosServices.getCourseList().subscribe(t=>this.arrCursos=t))}agregar(t){this.alumnoIngresado.inscripciones.includes(t)||this.alumnoIngresado.inscripciones.push(t),this.agregarAlumno(this.alumnoIngresado)}quitar(t){this.alumnoIngresado.inscripciones=this.alumnoIngresado.inscripciones.filter(e=>e!=t),this.agregarAlumno(this.alumnoIngresado)}agregarAlumno(t){this.alumnosServices.updateUser(t).subscribe(()=>{this.obtenerAlumnos()}),sessionStorage.setItem("usuario",t.nombre)}ngOnDestroy(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(C.u),o.Y36(v.Z))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-informacion-personal"]],decls:17,vars:4,consts:[["appTitulo",""],[1,"informationContainer"],["src","./../../../assets/misDatos.png","alt",""],[3,"estudianteAActualizar","alumnoAgregado"],[1,"cursosABM"],["role","list"],["role","listitem",3,"click",4,"ngFor","ngForOf"],[3,"vertical"],["role","listitem",3,"click"]],template:function(t,e){1&t&&(o.TgZ(0,"h1",0),o._uU(1,"Mis Datos Personales"),o.qZA(),o.TgZ(2,"mat-card",1),o._UZ(3,"img",2),o.TgZ(4,"app-formulario-actualizacion",3),o.NdJ("alumnoAgregado",function(l){return e.agregarAlumno(l)}),o.qZA(),o.qZA(),o.TgZ(5,"h1",0),o._uU(6,"Mis Cursos Personales"),o.qZA(),o.TgZ(7,"mat-card",4),o.TgZ(8,"mat-list",5),o.TgZ(9,"h3"),o._uU(10,"Cursos disponibles"),o.qZA(),o.YNc(11,q,5,1,"mat-list-item",6),o.qZA(),o._UZ(12,"mat-divider",7),o.TgZ(13,"mat-list",5),o.TgZ(14,"h3"),o._uU(15,"Cursos Anotados"),o.qZA(),o.YNc(16,x,5,1,"mat-list-item",6),o.qZA(),o.qZA()),2&t&&(o.xp6(4),o.Q6J("estudianteAActualizar",e.alumnoIngresado),o.xp6(7),o.Q6J("ngForOf",e.arrCursos),o.xp6(1),o.Q6J("vertical",!0),o.xp6(4),o.Q6J("ngForOf",e.alumnoIngresado.inscripciones))},directives:[m.a8,F,d.i$,c.sg,P.d,d.Tg,Z.Hw],styles:[".cursosABM[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;box-shadow:none}.cursosABM[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:column}.cursosABM[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{cursor:pointer}h3[_ngcontent-%COMP%]{text-align:center;font-weight:bold}h1[_ngcontent-%COMP%]{margin-top:8px;text-align:center;background-color:#f0f8ff;padding:4px 0}h2[_ngcontent-%COMP%]{text-align:center;background-color:#b2bfe0;margin-top:8px}.informationContainer[_ngcontent-%COMP%]{margin:24px;display:flex;box-shadow:none}"]}),n})()}];let U=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[f.Bz.forChild(z)],f.Bz]}),n})();var M=r(2789),J=r(4150);let N=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[c.ez,U,m.QW,d.ie,Z.Ps,h.ot,M.p0,u.lN,J.Bb,a.UX,A.c]]}),n})()}}]);