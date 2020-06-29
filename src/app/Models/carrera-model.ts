export class Carrera 
{  
    idCarrera: String;
    descCarrera: String;

    constructor(carrera: any)
    {
        this.idCarrera= carrera.idCarrera;
        this.descCarrera = carrera.descCarrera;
    }
}