import React from "react";

const Form = ({ setInputText, setTodos, inputText, todos, setFilter }) => {

  const setInputTextHandler = (e) => {
      setInputText(e.target.value);
  };

  const setTodosHandler = (e) => {
      e.preventDefault();
      setTodos([...todos, {id : Math.random() * 1000, text : inputText, completed : false}]);
      setInputText('');
  }

  const setFilterHandler = (e) => {
     setFilter(e.target.value);
  }

  return (
    <form>
      <input value={inputText} onChange={setInputTextHandler} type="text" name="" className="todo-input" />
      <button onClick={setTodosHandler} className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={setFilterHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
