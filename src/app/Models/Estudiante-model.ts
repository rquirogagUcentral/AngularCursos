import { Carrera } from './carrera-model';
import { Facultad } from './facultad-models';

export class Estudiante 
{  
    carreraEstudio: Carrera;
    facultadEstudio: Facultad;
    idCarrera: String;
    idFacultad: String;
    semestre: String;

    constructor(estudiante: any)
    {
        this.carreraEstudio = new Carrera(this.carreraEstudio);
        this.facultadEstudio = new Facultad(this.facultadEstudio);
        this.idCarrera = estudiante.idCarrera;
        this.idFacultad = estudiante.idFacultad;
        this.semestre = estudiante.semestre;
    }
}