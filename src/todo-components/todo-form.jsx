import { useState } from "react";
import { useDispatch } from "react-redux";


const TodoForm = () => {

    const [itemText, setItemText] = useState('');
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD', value: itemText}); //dispatch({type: 'ADD', value: userentered})
        setItemText('')
    }

    console.log('itemText: ', itemText)

    return <div>
        <form onSubmit={submit}>
            <input type="text" name='items' onChange={(e) => setItemText(e.target.value)} value={itemText}/>
        </form>
    </div>
}

export default TodoForm;