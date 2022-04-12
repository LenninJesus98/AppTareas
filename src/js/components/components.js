import { tareas } from "../../index";
import { TareaModel } from "../../classes";


const listDiv = document.querySelector('.todo-list');
const tareaInput = document.querySelector('.new-todo');
const btnEliminarTodo = document.querySelector('.clear-completed')
const filtro = document.querySelector('.filters')
const filtroSelect = document.querySelectorAll('.filtro')

export const mostrarHTML = (tarea) => {

    const { nombre, completado, id } = tarea;

    const html = `
    <li class="${completado ? 'completed' : ''}" data-id="${id}">
    <div class="view">
    <input class="toggle" type="checkbox" ${completado ? 'checked' : ''}>
    <label>${nombre}</label>
    <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    listDiv.appendChild(div.firstElementChild);
    return div;
}

tareaInput.addEventListener('keyup', e => {
    if (e.keyCode === 13 && tareaInput.value.length >= 4) {
        const tarea = new TareaModel(tareaInput.value);
        tareas.addTarea(tarea);
        tareaInput.value = '';
    }
});

listDiv.addEventListener('click', e => {
    const nameInput = e.target.localName;
    const tareaLi = e.target.parentElement.parentElement;
    const id = tareaLi.getAttribute('data-id');
    if (nameInput.includes('input')) {
        tareas.marcarCompletado(id);
        tareaLi.classList.toggle('completed');
    } else if (nameInput.includes('button')) {
        tareas.eliminar(id);
        console.log('elimnado');
        listDiv.removeChild(tareaLi)
    }
});

btnEliminarTodo.addEventListener('click', () => {
    tareas.eliminarCompletados();

    for (let i = listDiv.children.length - 1; i >= 0; i--) {
        const elemento = listDiv.children[i];
        if (elemento.classList.contains('completed')) {
            listDiv.removeChild(elemento)


        }
        console.log(tareas);

    };
});

filtro.addEventListener('click', e => {
    const filtro = e.target.text
    if (!filtro) return;

    filtroSelect.forEach(elem => elem.classList.remove('selected'))

    e.target.classList.add('selected')

    for (const elemento of listDiv.children) {
        console.log(elemento);
        elemento.classList.remove('hidden')
        const elementCompletado = elemento.classList.contains('completed')

        switch (filtro) {
            case 'Pendientes':
                if (elementCompletado) {
                    elemento.classList.add('hidden')
                }

                break;
            case 'Completados':
                if (!elementCompletado) {
                    elemento.classList.add('hidden')
                }

                break; 
        }

    }
})
