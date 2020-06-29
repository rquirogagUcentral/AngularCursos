export class ResponseGeneric {
    estado: String;
    descripcionEstado: String;

    constructor(responseGenerico: any)
    {
        this.estado = responseGenerico.estado;
        this.descripcionEstado = responseGenerico.descripcionEstado;
    }
}