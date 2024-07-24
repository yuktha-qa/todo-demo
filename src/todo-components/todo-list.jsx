import { useSelector } from "react-redux";


const TodoList = () => {

    const list = useSelector(state => state.todoList);

    console.log('TodoList list: ', list)

    return <div>{list.length}</div>
}

export default TodoList;