export class Todo{


    //? Este metodo se creo para convertir los objetos que nos crea el JSON del localStorage a nuevamente en instancias del tipo de la clase 
    //? Ya que si los dejamos asi, si tuvieramos metodos de esta clase, esos ya no podrian ser usados, ejemplo abajo
    static fromJson({id, tarea, completado, creado}){

        const tempTodo = new Todo(tarea);

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;

    }

    constructor(tarea) {
        
        this.tarea = tarea;
        this.id         = new Date().getTime(); // 12354512545 Esto nos da un numero en el tiempo que estamos usando como id automatico
        this.completado = false;
        this.creado     = new Date();

    }

    //* Este metodo es de ejemplo, que si no realizamos el metodo static de la parte superior, la instancia no podria ejecutar este metodo
    //* ya que el objeto del JSON no formaria parte de esta clase
    imprimir ( ){
        console.log(this.id, this.tarea);
    }

}