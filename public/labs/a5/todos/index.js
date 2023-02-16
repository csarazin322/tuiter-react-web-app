// alert('Hello World!');
import TodoItem from "./TodoItem.js";
import todos from "./todos.js";

$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${
    todos.map(todo => {
        return (TodoItem(todo));
    }).join('')
}

   </div>
`);
