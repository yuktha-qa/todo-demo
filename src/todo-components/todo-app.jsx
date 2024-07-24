import './../App.css';
import TodoForm from './todo-form';
import TodoList from './todo-list';

const TodoApp = () => {

    return (<div className="App">
        Todo App with redux
        
        <TodoForm />

        <TodoList />
    </div>)
}

export default TodoApp;