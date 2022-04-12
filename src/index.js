import './styles.css';
import { TareaModel, TareaList } from "./classes";
import { mostrarHTML } from './js/components/components';

export const tareas = new TareaList();

// console.log(tareas.tareas);
// creamos las tareas en html usando el foreach
tareas.tareas.forEach(tarea => {
    mostrarHTML(tarea) //tambien podemos usasr solo la funcion mostrarHTML sin parametros ni parentesis

});

// const newTarea = new TareaModel('tarea como instancia')
// tareas.addTarea(newTarea)

// console.log(tareas.tareas);