import React from "react";
import '../App.css';
import {FaTrash} from 'react-icons/fa';
import {FiEdit2, FiCheckCircle} from 'react-icons/fi';

const TodoList = ({ todos, setTodos, handleDelete, handleEdit }) => {
  return (
//     <div>
//         {todos.map((todo) => (
//             <li className="allTodos" key={todo.id}>
//                 <input 
//                 type="text" 
//                 value={todo.title}
//                 className="list" 
//                 onChange={(event) => event.preventDefault()}
//                 />
//                 <div>
//                     <button className="button-complete task-button"><FiCheckCircle/></button>
//                     <button className="button-edit task-button"><FiEdit2/></button>
//                     <button className="button-delete task-button"><FaTrash/></button>
//                 </div>
//             </li>  
//         ))}
        
//     </div>

    <ul className="allTodos">
      {todos.map((t) => (
        <li className="objective">
          <span className="todoName" key={t.id}>
            {t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)}><FiEdit2/></button>
          <button onClick={() => handleDelete(t.id)}><FaTrash/></button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
