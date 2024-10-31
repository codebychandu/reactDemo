import AppName from "./component/name";
import AddTodo from "./component/addTodo";

import TodoItem from "./component/TodoItem";
function Todo() {
    return (
        <div className='todo-container'>
            <AppName></AppName>
            <AddTodo></AddTodo>
            <div className="item">

            <TodoItem todoName={"hello"} todoDate={"87"}></TodoItem>
           
            </div>
        </div>
    );
}

export default Todo;