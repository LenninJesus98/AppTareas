export class TareaModel{

    constructor(tarea){
        this.nombre = tarea;
        this.completado = false;
        this.id = new Date().getTime();
        this.fecha = new Date();



    }
}