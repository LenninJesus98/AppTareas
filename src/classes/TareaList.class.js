import { mostrarHTML } from "../js/components/components";

export class TareaList {

    constructor() {
        // this.tareas = [];
        this.cargarStorage()
    };

    addTarea(tarea) {
        // añade tareas;
        this.tareas.push(tarea);
        mostrarHTML(tarea);
        this.guardarStorage()
    };


    marcarCompletado(id) {
        for (const tarea of this.tareas) {
            if (tarea.id == id) {
                tarea.completado = !tarea.completado;
                this.guardarStorage()
                break;
            }

        };
    }

    eliminar(id) {
        this.tareas = this.tareas.filter(tarea => tarea.id != id)
        this.guardarStorage()

    }

    eliminarCompletados() {
        this.tareas = this.tareas.filter(tarea => !tarea.completado)
        this.guardarStorage()
    }

    guardarStorage() {
        localStorage.setItem('tareas', JSON.stringify(this.tareas))
    }

    cargarStorage() {
        this.tareas = (localStorage.getItem('tareas')) ? JSON.parse(localStorage.getItem('tareas')) : []
        // console.log(this.tareas);
    }
}