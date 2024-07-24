import { useSelector } from "react-redux";


const TodoList = () => {

    const list = useSelector(state => state.todoList);

    console.log('TodoList list: ', list)

    return <div>
        {list.map((text, index) => (<div key={index}>{text}</div>))}
    </div>
}

export default TodoList;