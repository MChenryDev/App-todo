import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todo.forEach(  crearTodoHtml );

// const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo( newTodo );
// todoList.todo[0].imprimirClase();
// newTodo.imprimirClase();
console.log( 'todos', todoList.todo );


// const tarea = new Todo('Aprender JavaScript!!!');

// todoList.nuevoTodo( tarea );


// console.log(todoList);

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'ABC1234');
// sessionStorage.setItem('mi-key', 'ABC1234');

// setTimeout( ()=> {
//     localStorage.removeItem('mi-key');
// }, 1500 );

