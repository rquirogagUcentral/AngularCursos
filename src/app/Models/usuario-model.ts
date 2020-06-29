import { Estudiante } from 'src/app/Models/Estudiante-model';
import { Docente } from 'src/app/Models/docente-model';
import { Coordinador } from 'src/app/Models/coordinador-model';

//import { UV_UDP_REUSEADDR } from 'constants';

export class Usuario 
{
    idUsuario: String;
    nombreUsuario: String;
    correo: String;
    telefono: String;
    edad: String;
    genero: String;
    contrasena: String;
    fechaNacimiento: String;
    metodo: String;
    idTipoUsuario: String;
    flagCase: String;
    estudiante?: Estudiante[];
    docente?: Docente[];
    coordinador?: Coordinador[];

    constructor(usuario: any)
    {
        this.idUsuario = usuario.idUsuario;
        this.nombreUsuario = usuario.nombreUsuario;
        this.correo = usuario.correo;
        this.telefono = usuario.telefono;
        this.edad = usuario.edad;
        this.genero = usuario.genero;
        this.contrasena = usuario.contrasena;
        this.fechaNacimiento = usuario.fechaNacimiento;
        this.metodo = usuario.metodo;
        this.idTipoUsuario = usuario.idTipoUsuario;
        this.flagCase = usuario.flagCase;

    }
    
}