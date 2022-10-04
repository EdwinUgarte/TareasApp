import { Todo } from "../class";

import { todoList } from "../index";
// Referencias en Html
const divTodoList          = document.querySelector(".todo-list");
const txtInput             = document.querySelector(".new-todo");
const btnBorrarCompletados = document.querySelector('.clear-completed');
const ulFilters            = document.querySelector('.filters');
const anchordSelected      = document.querySelectorAll('.filtro');


export const crearTodoHtml = (todo) => {
  //? Crea el componente con codigo interpolado de html con js, para despues inyectarlo
  const htmlTodo = `
  <li class="${todo.completado ? "completed" : ""}" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${
          todo.completado ? "checked" : ""
        }>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  </li>`;

  //******************************* SEPARADOR ********************************** */
  
  //? Aqui estamos creando un elemento html en este caso un <div></div>
  const div = document.createElement("div");
  div.innerHTML = htmlTodo;

  //? firstElementChild inserta el primer hijo html
  divTodoList.append(div.firstElementChild);
};

//* Eventos

//? El evento 'keyup' significa que esta leyendo las teclas cuando las oprimimos
txtInput.addEventListener('keyup', (event) =>{

    //? El keyCode es la clave de tecla que ingresa el usuario, el 13 se refiere al Enter
    if(event.keyCode === 13 && txtInput.value.length > 0){
        //* Creamos una constante con la instancia de la clase Todo enviandole el valor que tenemos en el input
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo); //Se asigna al arreglo 
        crearTodoHtml(nuevoTodo);//Se crea visualmente con el metodo crearTodoHtml()
        //? value = ''   / se encarga de dejar vacio el input
        txtInput.value = '';
    }

})


divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName; // input, label, button
    const todoElemento = event.target.parentElement.parentElement;//parentElement = el elemento padre del cual estamos indicando
    const todoId = todoElemento.getAttribute('data-id');
    // console.log(todoId); Nos da el ID

    if( nombreElemento.includes('input')){
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed')// toggle nos permite cambiar de clase y actualizar en tiempo real
    }

    else if(nombreElemento === 'button'){
        todoList.borrarUno(todoId);
        //? Esto elimina la referencia html para que igual se borre visual
        divTodoList.removeChild(todoElemento)
    }
})


btnBorrarCompletados.addEventListener('click', () => {
    todoList.borrarCompletados();
    
    for(let i = divTodoList.children.length - 1; i >= 0; i--){

        const elemento = divTodoList.children[i];

        if( elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }

    }

})

ulFilters.addEventListener('click', (event) => {

    const filtro = event.target.text;
    anchordSelected.forEach(elem => elem.classList.remove('selected'));
    // console.log(event.target);
    //? target devuelve el elemento html en el que se dio click, en este caso seria <a>text</a>
    event.target.classList.add('selected')
    
    if(!filtro){return};



    for(const elemento of divTodoList.children){

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed')

        switch(filtro){
            case 'Pendientes': 
                if(completado){elemento.classList.add('hidden')};
                break;
            case 'Completados':
                if(!completado){elemento.classList.add('hidden')};
                break;
        }

    }

    })