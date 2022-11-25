export class Empleado{
    _id?: number;
    correo: string;
    nombre: string;
    apellido: string;
    ci: number;
    cargo: string;
    salario: number;

    constructor(correo: string, nombre: string, apellido: string, ci: number, cargo: string, salario: number){
        this.correo = correo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.ci = ci;
        this.cargo = cargo;
        this.salario = salario;
    }
}