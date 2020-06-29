import { Facultad } from './facultad-models';

export class Docente 
{  
    facultad: Facultad;
    curriculo: String;
    idFacultad: String;

    constructor(docente: any)
    {
        this.facultad=new Facultad(this.facultad);
        this.curriculo = docente.curriculo;
        this.idFacultad = docente.facultad;   
    }
}