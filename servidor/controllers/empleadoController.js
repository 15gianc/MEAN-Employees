const Empleado = require('../models/Empleado');



exports.registrarEmpleado = async (req,res) => {
    
    try {
        let empleado;
        //registramos el empleado
       empleado = new Empleado(req.body);

      await empleado.save();
      res.send(empleado);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('HUBO UN ERROR')
        
    }

};

exports.obtenerEmpleados = async (req,res) => {

    try {
        const empleados = await Empleado.find();
        res.json(empleados)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('HUBO UN ERROR')
        
    }

};

exports.actualizarEmpleado = async (req,res) => {

    try {
        const  { correo, nombre, apellido, ci, cargo, salario } = req.body;
        let empleado = await Empleado.findById(req.params.id);

        if(!empleado){
            res.status(404).json({msg: 'Empleado no registrado en la base de datos'})
        }
        empleado.correo = correo;
        empleado.nombre = nombre;
        empleado.apellido = apellido;
        empleado.ci = ci;
        empleado.cargo = cargo;
        empleado.salario = salario;

        empleado = await Empleado.findByIdAndUpdate({ _id: req.params.id}, empleado,{new: true});
        res.json(empleado);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('HUBO UN ERROR')
    }
}

exports.obtenerEmpleado = async (req,res) => {

    try {
        let empleado = await Empleado.findById(req.params.id);

        if(!empleado){
            res.status(404).json({msg: 'Empleado no registrado en la base de datos'})
        }

        res.json(empleado);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('HUBO UN ERROR')
    }
}

exports.eliminarEmpleado = async (req,res) => {

    try {
        let empleado = await Empleado.findById(req.params.id);

        if(!empleado){
            res.status(404).json({msg: 'Empleado no registrado en la base de datos'})
        }

        await Empleado.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Empleado eliminado con exito'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('HUBO UN ERROR')
    }
}