import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';

const routes: Routes = [
  {path: '', component: ListarEmpleadoComponent},
  {path: 'registrar-empleado', component: RegistrarEmpleadoComponent},
  {path: 'editar-empleado/:id', component: RegistrarEmpleadoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
