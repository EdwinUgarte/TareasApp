import { Todo } from "./todo.class";

export class TodoList {
  constructor() {
    // this.todos = [];
    this.cargarLocalStorage(); // Inicializa el arreglo vacio
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
  }

  borrarUno(id) {

   //? devuelve un nuevo arreglo de acuerdo a la condicion, en este caso dice que si el id es diferente me devuelva un arreglo con los que son diferentes 
   this.todos = this.todos.filter(todos => (todos.id != id));
   this.guardarLocalStorage();
  }

  marcarCompletado(id) {
    for (let todo of this.todos) {
      
      if (todo.id == id) {
        todo.completado = !todo.completado;
        this.guardarLocalStorage();
        break;
      }
    }

  }

  borrarCompletados() {

    this.todos = this.todos.filter(todos => todos.completado != true);
    this.guardarLocalStorage()
  }


  guardarLocalStorage(){

    localStorage.setItem('todo', JSON.stringify(this.todos));

  }

  cargarLocalStorage(){
  
   this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];
    
   this.todos = this.todos.map(obj => Todo.fromJson(obj));
   console.log(this.todos);


  }

}
