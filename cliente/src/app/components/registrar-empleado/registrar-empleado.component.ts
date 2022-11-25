import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {
  empleadoForm: FormGroup;
  titulo = 'Registrar Empleado';
  id: string | null;


  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _empleadoServices: EmpleadoService, private aRouter: ActivatedRoute) {
    this.empleadoForm = this.fb.group({
      correo: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ci: ['', Validators.required],
      cargo: ['', Validators.required],
      salario: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEmpleado(){
    console.log(this.empleadoForm);

    const EMPLEADO: Empleado ={
      correo: this.empleadoForm.get('correo')?.value,
      nombre: this.empleadoForm.get('nombre')?.value,
      apellido: this.empleadoForm.get('apellido')?.value,
      ci: this.empleadoForm.get('ci')?.value,
      cargo: this.empleadoForm.get('cargo')?.value,
      salario: this.empleadoForm.get('salario')?.value,

    }

    if(this.id !== null){
      //editamos el empleado
      this._empleadoServices.editarEmpleado(this.id, EMPLEADO).subscribe(data => {
        this.toastr.info('¡El empleado fue actualizado con exito!', '¡Empleado Actualizado!');
        this.router.navigate(['/']);
      },error => {
        console.log(error);
        this.empleadoForm.reset();
        
      })

    } else {
      //agregamos empleado
      console.log(EMPLEADO);
      this._empleadoServices.guardarEmpleado(EMPLEADO).subscribe(data => {
        this.toastr.success('¡El empleado se registro con exito!', '¡Empleado Registrado!');
        this.router.navigate(['/']);
        
      },error => {
        console.log(error);
        this.empleadoForm.reset();
        
      })
    }


   
    
  }

  esEditar() {
    if(this.id !== null){
      this.titulo = 'Editar Empleado';
      this._empleadoServices.obtenerEmpleado(this.id).subscribe(data => {
        this.empleadoForm.setValue({
          correo: data.correo,
          nombre: data.nombre,
          apellido: data.apellido,
          ci: data.ci,
          cargo: data.cargo,
          salario: data.salario,
        })
      })
    }
  }

}
