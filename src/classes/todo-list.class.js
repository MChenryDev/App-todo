import { Todo } from "./todo.class";
import { countTodo } from "../js/componentes";

export class TodoList {
    constructor() {
        // this.todo = [];;
        this.cargarLocalStorage();
        this.countTodo();
    }

    nuevoTodo( todo ) {
        this.todo.push( todo );
        this.guardarLocalStorage();
        this.countTodo();
    }

    eliminarTodo( id ) {

        this.todo = this.todo.filter( todo => todo.id != id );
        this.guardarLocalStorage();
        this.countTodo();
    }

    marcarCompletado( id ) {

        for( const todo of this.todo ) {

            console.log(id, todo.id);

            if( todo.id == id ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                this.countTodo();
                break;
            }
        }


    }

    
    countTodo() {
        let pendientes = 0;
        let countBox = countTodo.firstElementChild;
        for (let todo of this.todo) {
            (!todo.completado === true) ? pendientes++ : null;
        }
        countBox.innerHTML = pendientes;
    }

    eliminarCompletados() {
        this.todo = this.todo.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todo)  );

    }

    cargarLocalStorage() {

        this.todo = (localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo')) 
                        : [];

        this.todo = this.todo.map(  Todo.fromJason );

    }
}