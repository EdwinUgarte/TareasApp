import './styles.css';

import { Todo, TodoList} from './class'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

console.log(todoList.todos);

todoList.todos.forEach(todo => crearTodoHtml(todo));






// const tarea = new Todo('Aprender JS');
/* todoList.nuevoTodo(tarea);*/



// console.log(todoList);

// crearTodoHtml(tarea);


// localStorage.setItem('mi-llave', 'abc12356');
// sessionStorage.setItem('mi-llave', 'abc12356');

// setTimeout(() =>{
   
//     localStorage.removeItem('mi-llave')

// }, 1500)