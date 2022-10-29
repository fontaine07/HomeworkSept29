import React, { useState } from "react";
import { useEffect } from "react";
import "../css/Task.css";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import {v4 as uuidv4} from 'uuid';


const Task = () => {
// 	const taskInput = document.querySelector(".task-input input"),
// 	filters = document.querySelectorAll(".filters span"),
// 	clearAll = document.querySelector(".clear-btn"),
// 	taskBox = document.querySelector(".task-box");
// 	let editId,
// 	isEditTask = false,
// 	todos = JSON.parse(localStorage.getItem("todo-list"));
// 	filters.forEach(btn => {
// 		btn.addEventListener("click", () => {
// 			document.querySelector("span.active").classList.remove("active");
// 			btn.classList.add("active");
// 			showTodo(btn.id);
// 		});
// });
// function showTodo(filter) {
//     let liTag = "";
//     if(todos) {
//         todos.forEach((todo, id) => {
//             let completed = todo.status == "completed" ? "checked" : "";
//             if(filter == todo.status || filter == "all") {
//                 liTag += `<li class="task">
//                             <label for="${id}">
//                                 <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
//                                 <p class="${completed}">${todo.name}</p>
//                             </label>
//                             <div class="settings">
//                                 <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
//                                 <ul class="task-menu">
//                                     <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
//                                     <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
//                                 </ul>
//                             </div>
//                         </li>`;
//             }
//         });
//     }
//     taskBox.innerHTML = liTag || `<span>You don't have any task here</span>`;
//     let checkTask = taskBox.querySelectorAll(".task");
//     !checkTask.length ? clearAll.classList.remove("active") : clearAll.classList.add("active");
//     taskBox.offsetHeight >= 300 ? taskBox.classList.add("overflow") : taskBox.classList.remove("overflow");
// }
// showTodo("all");
// function showMenu(selectedTask) {
//     let menuDiv = selectedTask.parentElement.lastElementChild;
//     menuDiv.classList.add("show");
//     document.addEventListener("click", e => {
//         if(e.target.tagName != "I" || e.target != selectedTask) {
//             menuDiv.classList.remove("show");
//         }
//     });
// }
// function updateStatus(selectedTask) {
//     let taskName = selectedTask.parentElement.lastElementChild;
//     if(selectedTask.checked) {
//         taskName.classList.add("checked");
//         todos[selectedTask.id].status = "completed";
//     } else {
//         taskName.classList.remove("checked");
//         todos[selectedTask.id].status = "pending";
//     }
//     localStorage.setItem("todo-list", JSON.stringify(todos))
// }
// function editTask(taskId, textName) {
//     editId = taskId;
//     isEditTask = true;
//     taskInput.value = textName;
//     taskInput.focus();
//     taskInput.classList.add("active");
// }
// function deleteTask(deleteId, filter) {
//     isEditTask = false;
//     todos.splice(deleteId, 1);
//     localStorage.setItem("todo-list", JSON.stringify(todos));
//     showTodo(filter);
// }
// clearAll.addEventListener("click", () => {
//     isEditTask = false;
//     todos.splice(0, todos.length);
//     localStorage.setItem("todo-list", JSON.stringify(todos));
//     showTodo()
// });
// taskInput.addEventListener("keyup", e => {
//     let userTask = taskInput.value.trim();
//     if(e.key == "Enter" && userTask) {
//         if(!isEditTask) {
//             todos = !todos ? [] : todos;
//             let taskInfo = {name: userTask, status: "pending"};
//             todos.push(taskInfo);
//         } else {
//             isEditTask = false;
//             todos[editId].name = userTask;
//         }
//         taskInput.value = "";
//         localStorage.setItem("todo-list", JSON.stringify(todos));
//         showTodo(document.querySelector("span.active").id);
//     }
// 	return (
// 		<>
// 			<div className="wrapper">
//       <div className="task-input">
//         <img src="bars-icon.svg" alt="icon"/>
//         <input type="text" placeholder="Add a new task"/>
//       </div>
//       <div className="controls">
//         <div className="filters">
//           <span className="active" id="all">All</span>
//           <span id="pending">Pending</span>
//           <span id="completed">Completed</span>
//         </div>
//         <button className="clear-btn">Clear All</button>
//       </div>
//       <ul className="task-box"></ul>
//     </div>
// 		</>
// 	);
// 	});
//}

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([initialState]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
	localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); 

  const handleSubmit = (e) => {
    e.preventDefault();
	
    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="task-page-title">Tasks to be Done O w O</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
		  todos={todos}
		  setTodos={setTodo}
        />

        <TodoList
          todos={todos}
		  setTodos={setTodos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Task;