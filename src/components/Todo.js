import React, {useState} from 'react';

const Todo = ({text, todo, todos, setTodos}) => {

    const [cssFall, setCssFall] = useState(false);

    const checkHandler = () => {
        setTodos(todos.map(item => item.id === todo.id ? {...item, completed : !item.completed} : item ));
    }

    const cssFallHandler = () => {
        setCssFall(true);
    }

    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id));
    }

    return (
        <div className={`todo ${cssFall ? 'fall' : ''}`} onTransitionEnd={deleteHandler}>
           <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
           <button onClick={checkHandler} className="check-btn"><i className="fas fa-check"></i></button>
           <button onClick={cssFallHandler} className="delete-btn"><i className="fas fa-trash"></i></button>
        </div>
    );

}


export default Todo;