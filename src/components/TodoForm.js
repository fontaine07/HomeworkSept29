import React from "react";
import {v4 as uuidv4} from 'uuid';

const TodoForm = ({ handleSubmit, todos, editId, setTodos,todo, setTodo }) => {
    return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        // className="task-input"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit"> {editId ? "Edit" : "Confirm"}</button>
    </form>
  );
};

export default TodoForm;