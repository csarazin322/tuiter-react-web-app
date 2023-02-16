import TodoItem from "./TodoItem.js";

const TodoList = () => {
    return (`
       <ul>
           ${TodoItem('Buy milk')}
           ${TodoItem('Pickup the kids')}
           ${TodoItem('Walk the dog')}
       </ul>
   `);
}
export default TodoList;