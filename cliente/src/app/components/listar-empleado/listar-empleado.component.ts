import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
  listEmpleados: Empleado[] = [];

  

  constructor(private _empleadoServices: EmpleadoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this._empleadoServices.getEmpleados().subscribe(data => {
      console.log(data);
      this.listEmpleados = data;
      
    },error => {
      console.log(error);
      
    })
  };

  eliminarEmpleado(id: any){
    this._empleadoServices.eliminarEmpleado(id).subscribe(data => {
      this.toastr.error('El empleado fue eliminado con exito', 'Empleado eliminado');
      this.obtenerEmpleados();
    },error => {
      console.log(error);
      
    })
  }

}
